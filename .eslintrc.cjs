module.exports = {
    "env": {
        "browser": true,
        "es2021": true
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
        "sourceType": "module",
        "project": ["./tsconfig.json"],
    },
    "rules": {
        quotes: ["error", "double"],
        "indent": ["error", 4],
        semi: ["error", "never"],
    },
    "ignorePatterns": ["*.d.ts"],
};
