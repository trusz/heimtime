import { suite, test, expect } from "vitest"
import { date_to_slot, Event_State, slot_to_minutes, type Event } from "@heimtime/api"
import  { type Item, event_to_item } from "./item"

suite("event", () => {
	suite("date_to_slot", () => {
		type TestCase = {
			desc: 		 		  string
			date: 		 		  Date
			start_hour:  		  number
			step_in_minutes: 	  number
			expected_slot_number: number
		}
		
		const featureTests: TestCase[] = [
			{
				desc: "first slot",
				date: new Date("2000-01-01 06:00"),
				start_hour: 6,
				step_in_minutes: 15,
				expected_slot_number: 0,
			},
			{
				desc: "second slot",
				date: new Date("2000-01-01 06:15"),
				start_hour: 6,
				step_in_minutes: 15,
				expected_slot_number: 1,
			},
			{
				desc: "somewhere slot",
				date: new Date("2000-01-01 09:00"),
				start_hour: 6,
				step_in_minutes: 15,
				expected_slot_number: 12,
			},
			{
				desc: "30 min step",
				date: new Date("2000-01-01 08:45"),
				start_hour: 6,
				step_in_minutes: 30,
				expected_slot_number: 5,
			},
		]
		
		featureTests.forEach(testFeature)
		
		function testFeature(tc: TestCase) {
			test(tc.desc, () => {
				const actual_slot_number = date_to_slot(
					tc.date,
					tc.start_hour,
					tc.step_in_minutes,
				)
					
				expect(actual_slot_number).toEqual(tc.expected_slot_number)
					
					
			})
		}
			
	})

	suite("slot_to_minutes", () => {
		type Test_Case = {
            desc: 					  string
			start_hour: 			  number
			step_in_minutes:		  number
			slot: 					  number
			expected_date_in_minutes: number
        }

        const slot_to_date_tests: Test_Case[] = [
            {
                desc: "first slot",
				start_hour: 6,
				step_in_minutes: 15,
				slot: 1,
				expected_date_in_minutes: 375
            },
            {
                desc: "some slot",
				start_hour: 6,
				step_in_minutes: 15,
				slot: 7,
				expected_date_in_minutes: 465
            },
        ]

        slot_to_date_tests.forEach(test_feature)

        function test_feature(tc: Test_Case) {
            test(tc.desc, () => {
				const acutal_minutes = slot_to_minutes(
					tc.slot,
					tc.start_hour,
					tc.step_in_minutes,
				)
				expect(acutal_minutes).toEqual(tc.expected_date_in_minutes)
            })
        }
	})

	suite("slot_to_minutes and date_to_slot", () => {
		type Test_Case = {
			desc: 	         string
			start_hour: 	 number
			step_in_minutes: number
			slot: 			 number
		}

		const test_cases: Test_Case[] = [
			{
				desc: "there and back",
				start_hour: 9,
				step_in_minutes: 15,
				slot: 1,
			}
		]

		for(const tc of test_cases){
			test(tc.desc, ()=>{
				const mins = slot_to_minutes(tc.slot, tc.start_hour, tc.step_in_minutes)
				const hours = Math.floor(mins / 60)
				const minutes = mins%60
				const d = new Date()
				d.setMinutes(minutes)
				d.setHours(hours)
				const slot = date_to_slot(d, tc.start_hour, tc.step_in_minutes)
				// console.log({level:"test", msg:"there and back", mins, now: new Date().toLocaleTimeString("de"), date: d.toLocaleTimeString("de-DE"), slot})
				expect(slot).toEqual(tc.slot)
			})
		}
	})

	suite("even_to_item", () => {
		type Test_Case = {
			desc: string
			start_hour: number,
			step_in_minutes: number
			event: Event,
			expected_item: Item,
		}

		class Mock_Component {}

		const test_cases: Test_Case[] = [
			{
				desc: "first test",
				start_hour: 6,
				step_in_minutes: 15,
				event: {
					start: new Date("2000-01-01 06:00"),
					end:   new Date("2000-01-01 07:00"),
					state: Event_State.In_Progress
				},
				expected_item: {
					start: 0,
					end: 4,
					component: Mock_Component,
					props: {
						title:"06:00 - 07:00",
					},
				}
			}
		]


		for(const tc of test_cases){
			test(tc.desc, () => {
				const actual_item = event_to_item(tc.event, tc.start_hour,tc.step_in_minutes, Mock_Component)
				expect(actual_item).toEqual(tc.expected_item)
			})
		}
	})
})