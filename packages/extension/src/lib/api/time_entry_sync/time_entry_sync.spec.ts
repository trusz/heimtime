import { describe, it } from "vitest"
import { type API } from "./api"
import { type CTX_Time_Entries } from "./ctx_time_entries"
import { type CMD_Replace_Time_Entry_By_Id } from "../time_entry/time_entry_context"
import { time_entry_sync } from "./time_entry_sync"
// import { time_entry_sync } from "./time_entry_sync"

describe("time_entry_sync", () => {
    interface TestCase {
        desc: string
    }

    const feature_tests: TestCase[] = [
        {
            desc: "first test",
        },
    ]

    feature_tests.forEach(test_feature)

    function test_feature (tc: TestCase) {
        it(tc.desc, () => {
            console.log({ level: "dev", msg: "test_feature", tc })
            time_entry_sync(mock_api, mock_ctx_time_entries)
        })
    }
})

const mock_api: API = {
    save_time_entry: async (te) => {
        console.log({ level: "mock", msg: "save_time_entry", te })
    },
    update_time_entry: async (te) => {
        console.log({ level: "mock", msg: "update_time_entry", te })
    },
    fetch_time_entires: async (start, end) => {
        console.log({ level: "mock", msg: "fetch_time_entires", start, end })
        return []
    },
    delete_time_entry: async (te) => {
        console.log({ level: "mock", msg: "delete_time_entry", te })
    },
}

const mock_ctx_time_entries: CTX_Time_Entries = {
    store_to_save: {
        subscribe: (cb) => {
            console.log({ level: "mock", msg: "store_to_save.subscribe" })
        },
    },
    store_to_delete: {
        subscribe: (cb) => {
            console.log({ level: "mock", msg: "store_to_delete.subscribe" })
        },
    },
    clear: () => {
        console.log({ level: "mock", msg: "clear" })
    },
    create_time_entry: (te) => {
        console.log({ level: "mock", msg: "create_time_entry", te })
    },
    update_by_batch: (cmd: CMD_Replace_Time_Entry_By_Id[]) => {
        console.log({ level: "mock", msg: "update_by_batch", cmd })
    },
    delete_batch: (ids: number[]) => {
        console.log({ level: "mock", msg: "delete_by_batch", ids })
    },

}
