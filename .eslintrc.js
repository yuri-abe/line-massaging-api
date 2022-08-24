module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  root: true, // trueにしないと親Dirの設定ファイルを見てしまう
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  ignorePatterns: ['.eslintrc.js', 'node_modules/', 'dist/'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    semi: ['error', 'never'], //文末のセミコロンを禁止
    quotes: ['warn', 'single'], //文字列指定をシングルクォートに統一
    curly: 'error', //ブロックに含まれるステートメントが1つの場合の中括弧の省略を禁止
    'no-unused-labels': 'warn', //未使用のラベルの排除
    'no-unused-vars': 'off', //typescriptで不正確な挙動のため機能OFF
    'no-constant-condition': 'warn',
    indent: ['warn', 2, { ignoredNodes: ['TemplateLiteral'] }],
    'no-template-curly-in-string': 'warn',
    'no-var': 'error',
    'no-empty': 'warn',
    'prefer-const': 'warn',
    'max-len': ['warn', { code: 140 }],
    'max-depth': ['warn', 3],
    'comma-spacing': ['warn', { before: false, after: true }],
    'no-sequences': 'error',
    complexity: ['warn', 16],
    'block-spacing': 'warn',
    'no-whitespace-before-property': 'warn',
    'space-infix-ops': 'warn',
    'no-empty-function': 'warn',
  },
}
