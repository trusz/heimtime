module.exports = {
    "extends": [
        "standard-with-typescript",
        "../../.eslintrc.cjs",
        // "plugin:svelte/recommended",
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": ["./tsconfig.json"],
    },
    "rules": {
        "@typescript-eslint/indent": ["error", 4],
        "@typescript-eslint/quotes": ["error", "double"],
        "@typescript-eslint/semi": ["error", "never"],
    }
}
