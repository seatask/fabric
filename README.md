# @seatask/fabric

包含 eslint 的配置文件合集

```
yarn add -D @seatask/fabric
```

# 使用 eslint

**修改 eslintrc**

in `.eslintrc.js`

```js
module.exports = {
  extends: [require.resolve('@seatask/fabric/lib/eslint')],
  rules: {}
};
```

**vscode 中配置**  
vscode 安装 eslint 插件并在配置文件中配置:

in `.vscode\settings.json`

```json
{
  "eslint.validate": ["javascript", "vue", "javascriptreact", "typescript", "typescriptreact"],
  "eslint.enable": true,
  "eslint.trace.server": "verbose",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "[typescript]": {
    "editor.formatOnSave": false
  },
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "[vue]": {
    "editor.formatOnSave": false
  },
  "[javascriptreact]": {
    "editor.formatOnSave": false
  },
  "[typescriptreact]": {
    "editor.formatOnSave": false
  }
}
```

# 使用 tsconfig.json

约定一些 ts 编译选项，比如`noImplicitThis`等等。

in `tsconfig.json`

```json
{
  "extends": "./node_modules/@seatask/fabric/lib/tsconfig.json",
  // 其他规则请在下面添加
  "compilerOptions": {
    "outDir": "dist/types",
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": [
    "src/types/**/*.ts",
    "src/types/**/*.tsx",
    "src/**/*.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "tests/**/*.ts",
    "tests/**/*.tsx"
  ],
  "exclude": ["node_modules"]
}
```

# 关联

- https://github.com/umijs/fabric
