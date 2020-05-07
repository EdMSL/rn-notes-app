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
    // "plugin:@typescript-eslint/recommended",
  ],
  plugins: [
    // "react",
    // "react-hooks",
    // "react-native",
    "import",
    "@typescript-eslint",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    // "arrow-body-style": [1, "as-needed", {
    //   requireReturnForObjectLiteral: false,
    // }],
    // "arrow-parens": [1, "always"],
    // "arrow-spacing": [1, {
    //   before: true,
    //   after: true,
    // }],
    // "comma-dangle": [1, {
    //   arrays: "always-multiline",
    //   objects: "always-multiline",
    //   imports: "always-multiline",
    //   exports: "always-multiline",
    //   functions: "always-multiline",
    // }],
    // "comma-spacing": [1, {
    //   before: false,
    //   after: true
    // }],
    "eol-last": 0,
    // "func-call-spacing": [1, "never"],
    // "jsx-quotes": [1, "prefer-double"],
    "implicit-arrow-linebreak": 1,
    "indent": [1, 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      FunctionDeclaration: {
        parameters: 1,
        body: 1
      },
      FunctionExpression: {
        parameters: 1,
        body: 1
      },
      CallExpression: {
        arguments: 1
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      ignoredNodes: ["JSXElement", "JSXElement > *", "JSXAttribute", "JSXIdentifier", "JSXNamespacedName", "JSXMemberExpression", "JSXSpreadAttribute", "JSXExpressionContainer", "JSXOpeningElement", "JSXClosingElement", "JSXText", "JSXEmptyExpression", "JSXSpreadChild"],
      ignoreComments: false
    }],
    // "key-spacing": [1, { beforeColon: false, afterColon: true }],
    // "linebreak-style": 0,
    // "lines-between-class-members": 0,
    "max-len": [1, 110],
    // "no-extra-semi": 1,
    "no-magic-numbers": 0, // disabled in favor @typescript-eslint/no-magic-numbers rule
    // "no-multi-spaces": [1, {
    //   ignoreEOLComments: false,
    // }],
    // "no-multiple-empty-lines": 0,
    "no-nested-ternary": 1,
    // "no-spaced-func": 1,
    // "no-trailing-spaces": [1, {
    //   skipBlankLines: false,
    //   ignoreComments: false,
    // }],
    "object-curly-newline": [1, {
      ObjectExpression: { minProperties: 3, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 3, multiline: true, consistent: true },
      ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
      ExportDeclaration: { minProperties: 3, multiline: true, consistent: true },
    }],
    "object-curly-spacing": [1, "always"],
    // "object-property-newline": [1, {
    //   allowAllPropertiesOnSameLine: true,
    // }],
    // "padded-blocks": [1, {
    //   blocks: "never",
    //   classes: "never",
    //   switches: "never",
    // }, {
    //   allowSingleLineBlocks: true,
    // }],
    quotes: [0, "single", { avoidEscape: true }],
    // "semi-spacing": [1, {
    //   before: false,
    //   after: true,
    // }],
    // "semi": [1, "always"],
    // "space-in-parens": [1, "never"],
    // "space-infix-ops": 1,
    // "spaced-comment": 0,

    // "import/extensions": [2, "always", { "js": "never", "ts": "never", "tsx": "never" }],
    "import/newline-after-import": 0,
    "import/no-cycle": [2, { maxDepth: 1 }],
    "import/no-duplicates": 1,
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

    // "react/jsx-boolean-value": [1, "never", { always: [] }],
    "react/jsx-closing-bracket-location": 1,
    // "react/jsx-closing-tag-location": 1,
    "react/jsx-indent": [1, 2],
    "react/jsx-indent-props": [1, 2],
    // "react/jsx-filename-extension": [1, {
    //   extensions: [".tsx", ".jsx"],
    // }],
    "react/jsx-first-prop-new-line": 1,
    // "react/jsx-fragments": 0, // use React.Fragment or <>
    "react/jsx-tag-spacing": 1,
    "react/prefer-stateless-function": 0,
    "react/prop-types": 0,
    "react/self-closing-comp": 1,
    "react/jsx-max-props-per-line": [1, {
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
    "jsx-quotes": 0,

    "react-native/no-inline-styles": 2,

    // "@typescript-eslint/member-delimiter-style": 0,
    "@typescript-eslint/interface-name-prefix": [2, {
      prefixWithI: "always",
      allowUnderscorePrefix: false,
    }],
    "@typescript-eslint/no-explicit-any": 1,
    "@typescript-eslint/explicit-function-return-type": 1,
    "@typescript-eslint/no-magic-numbers": [1, {
      ignore: [-1, 0, 1, 2],
      ignoreArrayIndexes: true,
      enforceConst: false,
      detectObjects: false,
      ignoreNumericLiteralTypes: false,
      ignoreEnums: false,
    }],
    // "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-unused-vars": 1,
    // "@typescript-eslint/no-use-before-define": 0,
  },
}
