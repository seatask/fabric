// eslint-disable-next-line @typescript-eslint/no-var-requires
// const path = require('path');

// const eslintFolder = path.join(path.dirname(require.resolve('eslint')), '..');

// const moduleResolverPath = path.join(eslintFolder, 'lib/shared/relative-module-resolver');
// // eslint-disable-next-line @typescript-eslint/no-var-requires
// const ModuleResolver = require(moduleResolverPath);

// ModuleResolver.resolve = function(moduleName) {
//   return require.resolve(moduleName);
// };

module.exports = {
  extends: [
    'plugin:vue/essential',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
    // // `plugin:${require.resolve('eslint-plugin-vue//essential')}/essential`,
    // 'plugin:vue/essential',
    // require.resolve(`@vue/eslint-config-typescript/recommended`),
    // require.resolve(`@vue/eslint-config-prettier`),
    // require.resolve(`@vue/eslint-config-prettier/@typescript-eslint`)
  ],
  // plugin:[
  //   `${require.resolve('eslint-plugin-vue')}`,
  // ],

  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-member-accessibility': ['warn'],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-use-before-define': ['off'],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 120,
        tabWidth: 2,
        trailingComma: 'all',
      },
    ],
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
