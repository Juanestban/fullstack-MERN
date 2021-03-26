const types = {
  ON: "on",
  OFF: "off",
}

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ["standard", "prettier"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    "multiline-ternary": types.OFF,
    "no-unused-vars": types.OFF,
    "no-return-assign": types.OFF,
    "no-unused-expressions": types.OFF,
    "no-undef": types.OFF,
    "space-before-function-paren": types.OFF,
  },
}
