module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },
  plugins: ["react"],
  root: true,
  rules: {
    indent: "off",
    "eol-last": ["error", "always"],
    "func-style": ["error", "expression", { allowArrowFunctions: true }],
    "newline-before-return": "error",
    "no-dupe-class-members": "error",
    "no-var": "error",
    "object-shorthand": ["error", "always"],
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-spread": "error",
    "require-yield": "error",
    "react/prop-types": "off",
    "no-unused-vars": [
      "error",
      { vars: "local", args: "after-used", ignoreRestSiblings: false },
    ],
  },
};
