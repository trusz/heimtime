import { describe, it } from "vitest"
// import { time_entry_sync } from "./time_entry_sync"

describe("time_entry_sync", () => {
    describe("Feature", () => {
        interface TestCase {
            desc: string
        }

        const feature_tests: TestCase[] = [
            {
                desc: "first test"
            }
        ]

        feature_tests.forEach(test_feature)

        function test_feature (tc: TestCase) {
            it(tc.desc, () => {
                console.log({ level: "dev", msg: "test_feature", tc })
            })
        }
    })
})
