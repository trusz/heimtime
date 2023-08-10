module.exports = {
    "extends": [
        "standard-with-typescript",
        "../../.eslintrc.cjs",
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": ["./tsconfig.json"],
    },
    "overrides": [
        {
            "files": [
                "**/*.svelte",
            ],
            "extends": [
                // "plugin:svelte/recommended",
            ],
            "parserOptions": {
                "project": ["./tsconfig.json"],
            }
        },
    ],
    "rules": {
        "@typescript-eslint/indent": ["error", 4],
        "@typescript-eslint/quotes": ["error", "double"],
        "@typescript-eslint/semi": ["error", "never"],
        "@typescript-eslint/naming-convention": ["error", {"selector": "variableLike", "format": ["snake_case"] }],
        "@typescript-eslint/key-spacing": ["error", { "align": "value" }],
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/no-misused-promises": [
            "error",
            { 
                checksConditionals: true, 
                checksVoidReturn: false, 
                checksSpreads: true,
            },
        ],
        "@typescript-eslint/explicit-function-return-type": [
            "error",
            {
                allowFunctionsWithoutTypeParameters: true,
            }
        ]
    }
}
