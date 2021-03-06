module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      "jsx": true,
    },
    ecmaVersion: 2018,
    project: "./tsconfig.json",
    tsconfigRootDir: ".",
    warnOnUnsupportedTypeScriptVersion: false,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    "@react-native-community",
    // "airbnb",
    // "airbnb/hooks",
    // "plugin:@typescript-eslint/recommended",
  ],
  plugins: [
    // "react",
    // "jsx-a11y",
    "import",
    // "react-hooks",
    "@typescript-eslint",
  ],
  rules: {
    "eol-last": 2,
    // "linebreak-style": 0,
    "no-magic-numbers": 0, // disabled in favor @typescript-eslint/no-magic-numbers rule
    "no-multiple-empty-lines": [2, { max: 1}],
    // "object-curly-newline": [2, {
    //   ObjectExpression: { minProperties: 3, multiline: true, consistent: true },
    //   ObjectPattern: { minProperties: 3, multiline: true, consistent: true },
    //   ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
    //   ExportDeclaration: { minProperties: 3, multiline: true, consistent: true },
    // }],
    quotes: [2, "single", { avoidEscape: true }],

    "import/no-cycle": [2, { maxDepth: 1 }],
    "import/no-duplicates": 2,
    "import/no-extraneous-dependencies": 0,
    "import/order": [1, {
      groups: [
        [
          "builtin",
          "external",
          "internal"
        ],
      ],
      "newlines-between": "always",
    }],
    "import/prefer-default-export": 0,

    "prettier/prettier": 0,

    // "react/jsx-filename-extension": [1, {
    //   "extensions": [".tsx", ".jsx"],
    // }],
    "react/jsx-closing-bracket-location": 1,
    "react/jsx-indent-props": [2, 2],
    "react/jsx-first-prop-new-line": 2,
    "react/jsx-fragments": [1, "element"],
    "react/jsx-max-props-per-line": [2, {
      "maximum": 1,
      "when": "always",
    }],
    "react/jsx-wrap-multilines": ['error', {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line',
    }],
    "jsx-quotes": [2, "prefer-double"],
    // "react/prefer-stateless-function": 0,
    // "react/prop-types": 0,

    "react-native/no-inline-styles": 2,

    // "@typescript-eslint/array-type": [2, {
    //   "default": "array-simple",
    //   "readonly": "array-simple",
    // }],
    "@typescript-eslint/interface-name-prefix": [2, {
      "prefixWithI": "always",
      "allowUnderscorePrefix": false,
    }],
    // "@typescript-eslint/member-delimiter-style": [2, {
    //   "multiline": {
    //       "delimiter": "comma",
    //       "requireLast": true,
    //   },
    //   "singleline": {
    //       "delimiter": "comma",
    //       "requireLast": true,
    //   }
    // }],
    // "@typescript-eslint/no-explicit-any": 1,
    "@typescript-eslint/no-magic-numbers": [1, {
      ignore: [-1, 0, 1, 2],
      ignoreArrayIndexes: true,
      enforceConst: false,
      detectObjects: false,
      ignoreNumericLiteralTypes: false,
      ignoreEnums: false,
    }],
    // "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-unused-vars": 0,
  },
  globals: {
  },
  settings: {
    react: {
      version: "detect",
    },
  },
}
