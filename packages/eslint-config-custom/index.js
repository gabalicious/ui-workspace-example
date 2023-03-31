module.exports = {
  extends: [
    "turbo",
    "prettier",
    "plugin:vue/vue3-essential",
    "plugin:@typescript-eslint/recommended",
    "@vue/eslint-config-prettier",
    // "plugin:tailwindcss/recommended",
    "plugin:storybook/recommended",
  ],
  globals: {
    window: true,
    module: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    parser: {
      // Script parser for `<script>`
      js: "@typescript-eslint/parser",

      ts: "@typescript-eslint/parser",

      "<template>": "@typescript-eslint/parser",
      cjs: "@typescript-eslint/parser",
      // vue: "vue-eslint-parser",
      tsx: "@typescript-eslint/parser",
      jsx: "@babel/eslint-parser",

      mjs: "@typescript-eslint/parser",
    },
  },

  rules: {
    // turn off max-len because it's annoying
    "max-len": "off",
    "vue/multi-word-component-names": "off",
    "vue/no-unused-vars": ["error", { ignorePattern: "^_" }],
    "@typescript-eslint/no-var-requires": 0,
    "vue/no-useless-template-attributes": 0,
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "id-length": [
      "error",
      {
        min: 3,
        exceptions: ["i", "j"],
        properties: "never",
      },
    ],
  },
};
