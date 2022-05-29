module.exports ={
  ...require('eslint-config/eslint-vite'),
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  }
}