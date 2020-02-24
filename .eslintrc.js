module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "@typescript-eslint/tslint"
    ],
    "rules": {
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/array-type": "error",
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/ban-ts-ignore": "error",
        "@typescript-eslint/class-name-casing": "error",
        "@typescript-eslint/consistent-type-assertions": "error",
        "@typescript-eslint/consistent-type-definitions": "error",
        "@typescript-eslint/explicit-member-accessibility": [
            "error",
            {
                "accessibility": "explicit"
            }
        ],
        "@typescript-eslint/indent": [
            "error",
            2,
            {
                "ArrayExpression": "first",
                "ObjectExpression": "first",
                "FunctionDeclaration": {
                    "parameters": "first"
                },
                "FunctionExpression": {
                    "parameters": "first"
                }
            }
        ],
        "@typescript-eslint/interface-name-prefix": "error",
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                "multiline": {
                    "delimiter": "semi",
                    "requireLast": true
                },
                "singleline": {
                    "delimiter": "semi",
                    "requireLast": false
                }
            }
        ],
        "@typescript-eslint/member-ordering": "error",
        "@typescript-eslint/no-empty-function": "error",
        "@typescript-eslint/no-empty-interface": "error",
        "@typescript-eslint/no-extraneous-class": "error",
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/no-for-in-array": "error",
        "@typescript-eslint/no-inferrable-types": "error",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-namespace": "error",
        "@typescript-eslint/no-non-null-assertion": "error",
        "@typescript-eslint/no-param-reassign": "error",
        "@typescript-eslint/no-require-imports": "error",
        "@typescript-eslint/no-this-alias": "error",
        "@typescript-eslint/no-unnecessary-type-arguments": "error",
        "@typescript-eslint/no-unnecessary-type-assertion": "error",
        "@typescript-eslint/no-use-before-define": "error",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/prefer-readonly": "error",
        "@typescript-eslint/promise-function-async": "error",
        "@typescript-eslint/quotes": [
            "error",
            "single",
            {
                "avoidEscape": true
            }
        ],
        "@typescript-eslint/restrict-plus-operands": "error",
        "@typescript-eslint/semi": [
            "error",
            "always"
        ],
        "@typescript-eslint/strict-boolean-expressions": [
            "error",
            {
                "allowNullable": true
            }
        ],
        "@typescript-eslint/triple-slash-reference": "error",
        "@typescript-eslint/type-annotation-spacing": "error",
        "@typescript-eslint/unbound-method": "error",
        "@typescript-eslint/unified-signatures": "error",
        "arrow-body-style": [
            "error",
            "always"
        ],
        "arrow-parens": [
            "error",
            "as-needed"
        ],
        "camelcase": "error",
        "class-methods-use-this": "error",
        "comma-dangle": "error",
        "complexity": [
            "error",
            {
                "max": 20
            }
        ],
        "constructor-super": "error",
        "curly": "error",
        "default-case": "error",
        "dot-notation": "error",
        "eol-last": "error",
        "eqeqeq": [
            "error",
            "smart"
        ],
        "guard-for-in": "error",
        "id-blacklist": [
            "error",
            "any",
            "Number",
            "number",
            "String",
            "string",
            "Boolean",
            "boolean",
            "Undefined",
            "undefined"
        ],
        "id-match": "error",
        "import/no-default-export": "error",
        "import/no-extraneous-dependencies": "error",
        "import/no-unassigned-import": "error",
        "import/order": "error",
        "jsdoc/no-types": "error",
        "max-len": [
            "error",
            {
                "code": 140
            }
        ],
        "max-lines": [
            "error",
            1000
        ],
        "new-parens": "error",
        "newline-per-chained-call": "error",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-cond-assign": "error",
        "no-console": [
            "error",
            {
                "allow": [
                    "warn",
                    "error",
                    "dir",
                    "assert",
                    "clear",
                    "count",
                    "countReset",
                    "group",
                    "groupCollapsed",
                    "groupEnd",
                    "Console",
                    "dirxml",
                    "table",
                    "markTimeline",
                    "profile",
                    "profileEnd",
                    "timeline",
                    "timelineEnd",
                    "timeStamp",
                    "context"
                ]
            }
        ],
        "no-debugger": "error",
        "no-duplicate-case": "error",
        "no-duplicate-imports": "error",
        "no-empty": "error",
        "no-eval": "error",
        "no-extra-bind": "error",
        "no-fallthrough": "error",
        "no-invalid-this": "error",
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 1
            }
        ],
        "no-new-func": "error",
        "no-new-wrappers": "error",
        "no-null/no-null": "error",
        "no-plusplus": "error",
        "no-redeclare": "error",
        "no-restricted-imports": [
            "error",
            "rxjs/Rx"
        ],
        "no-return-await": "error",
        "no-sequences": "error",
        "no-shadow": [
            "error",
            {
                "hoist": "never"
            }
        ],
        "no-sparse-arrays": "error",
        "no-template-curly-in-string": "error",
        "no-throw-literal": "error",
        "no-trailing-spaces": "error",
        "no-undef-init": "error",
        "no-underscore-dangle": "error",
        "no-unsafe-finally": "error",
        "no-unused-expressions": [
            "error",
            {
                "allowShortCircuit": true
            }
        ],
        "no-useless-constructor": "error",
        "no-var": "error",
        "no-void": "error",
        "object-shorthand": "error",
        "one-var": [
            "error",
            "never"
        ],
        "padding-line-between-statements": [
            "error",
            {
                "blankLine": "always",
                "prev": "*",
                "next": "return"
            }
        ],
        "prefer-arrow/prefer-arrow-functions": "error",
        "prefer-const": "error",
        "prefer-object-spread": "error",
        "prefer-template": "error",
        "quote-props": [
            "error",
            "as-needed"
        ],
        "radix": "error",
        "space-before-function-paren": [
            "error",
            {
                "anonymous": "never",
                "named": "never",
                "asyncArrow": "always"
            }
        ],
        "space-in-parens": [
            "error",
            "never"
        ],
        "spaced-comment": "error",
        "unicorn/filename-case": "error",
        "use-isnan": "error",
        "yoda": "error",
        "@typescript-eslint/tslint/config": [
            "error",
            {
                "rules": {
                    "comment-type": [
                        true,
                        "singleline",
                        "doc"
                    ],
                    "component-class-suffix": true,
                    "component-max-inline-declarations": true,
                    "component-selector": [
                        true,
                        "element",
                        [
                            "ngx",
                            "test"
                        ],
                        "kebab-case"
                    ],
                    "contextual-decorator": true,
                    "contextual-lifecycle": true,
                    "directive-class-suffix": true,
                    "directive-selector": [
                        true,
                        "attribute",
                        [
                            "ngx",
                            "test"
                        ],
                        "camelCase"
                    ],
                    "encoding": true,
                    "i18n": [
                        true,
                        "check-id",
                        "check-text"
                    ],
                    "import-destructuring-spacing": true,
                    "import-spacing": true,
                    "jsdoc-format": [
                        true,
                        "check-multiline-start"
                    ],
                    "no-attribute-decorator": true,
                    "no-boolean-literal-compare": true,
                    "no-conflicting-lifecycle": true,
                    "no-default-import": true,
                    "no-dynamic-delete": true,
                    "no-forward-ref": true,
                    "no-host-metadata-property": true,
                    "no-input-rename": true,
                    "no-inputs-metadata-property": true,
                    "no-lifecycle-call": true,
                    "no-output-native": true,
                    "no-output-on-prefix": true,
                    "no-output-rename": true,
                    "no-outputs-metadata-property": true,
                    "no-pipe-impure": true,
                    "no-queries-metadata-property": true,
                    "no-tautology-expression": true,
                    "no-unnecessary-callback-wrapper": true,
                    "no-unused-css": true,
                    "number-literal-format": true,
                    "one-line": [
                        true,
                        "check-open-brace",
                        "check-whitespace",
                        "check-else",
                        "check-catch",
                        "check-finally"
                    ],
                    "prefer-conditional-expression": [
                        true,
                        "check-else-if"
                    ],
                    "prefer-inline-decorator": true,
                    "prefer-method-signature": true,
                    "prefer-output-readonly": true,
                    "prefer-while": true,
                    "return-undefined": true,
                    "static-this": true,
                    "template-banana-in-box": true,
                    "template-conditional-complexity": true,
                    "template-cyclomatic-complexity": true,
                    "template-no-call-expression": true,
                    "template-no-negated-async": true,
                    "template-use-track-by-function": true,
                    "typedef": [
                        true,
                        "call-signature",
                        "property-declaration"
                    ],
                    "unnecessary-else": true,
                    "use-component-view-encapsulation": true,
                    "use-lifecycle-interface": true,
                    "use-pipe-decorator": true,
                    "use-pipe-transform-interface": true,
                    "whitespace": [
                        true,
                        "check-branch",
                        "check-decl",
                        "check-operator",
                        "check-module",
                        "check-separator",
                        "check-rest-spread",
                        "check-type",
                        "check-typecast",
                        "check-type-operator",
                        "check-preblock"
                    ]
                }
            }
        ]
    }
};
