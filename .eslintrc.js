module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "eslint:recommended",
    "prettier",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:jest/recommended",
  ],
  parserOptions: {
    baseUrl: "src",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: ["react", "only-warn", "import"],
  parser: "babel-eslint",
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      "babel-plugin-root-import": [
        {
          rootPathSuffix: "./src",
          rootPathPrefix: "~/",
        },
        {
          rootPathSuffix: "./public/static",
          rootPathPrefix: "~static/",
        },
        {
          rootPathSuffix: "./public/assets",
          rootPathPrefix: "~assets/",
        },
        {
          rootPathSuffix: "./tests",
          rootPathPrefix: "~tests/",
        },
        {
          rootPathSuffix: "./pages",
          rootPathPrefix: "~pages/",
        },
      ],
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off",
    "react/forbid-prop-types": "off",
    "import/prefer-default-export": "off",
  },
};
