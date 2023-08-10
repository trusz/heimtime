module.exports = {
    "env": {
        "browser": true,
        "es2021":  true
    },
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script",
            }
        },
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType":  "module",
        "project":     ["./tsconfig.json"],
    },
    "rules": {
        quotes:            ["error", "double"],
        "indent":          ["error", 4],
        semi:              ["error", "never"],
        "key-spacing":     ["error", { "align": "value" }],
        "no-multi-spaces": "off",
        // This does not want to work for interfaces
        // so I have to disable it ^
        // "no-multi-spaces": [
        //     "error", 
        //     { 
        //         ignoreEOLComments: true, 
        //         exceptions:        { 
        //             "Property":          true, 
        //             "Identifier":        true,
        //             "PropertySignature": true,
        //             "TypeReference":     true,
        //         } 
        //     }
        // ],
    },
    "ignorePatterns": ["*.d.ts"],
}
