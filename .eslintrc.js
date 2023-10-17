/*
* "off"或者0，不启用这个规则
* "warn"或者1，出现问题会有警告
* "error"或者2，出现问题会报错
*/

module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-essential",
        "./.eslintrc-auto-import.json"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "vue"
    ],
    "rules": {
      "@typescript-eslint/no-explicit-any": "off", // 不禁用any类型
      "camelcase": "error", //强制驼峰法命名
       "eqeqeq": "error", //强制全等( === 和 !==)
       "arrow-parens": ["error", "as-needed"], // 箭头函数的参数可以不使用圆括号
       "indent": ["error", 2], //缩进风格(强制使用一致的缩进)
       "semi": "off", //可以使用分号
       "@typescript-eslint/no-unused-vars": "error", //不能有声明后未被使用的变量或参数
       "no-multiple-empty-lines": ["error", { "max": 1 }], //空行最多不能超过1行
       "no-debugger": process.env.NODE_ENV === 'production' ? 'error' : 'off', //线上禁止使用debugger
    },
    "overrides": [
        {
            files: ["src/**/*.vue"],
            rules: {
                "vue/multi-word-component-names": "off"
            }
        }
    ]
}
