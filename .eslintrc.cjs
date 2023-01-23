/* eslint-env node */
module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  "parser": "@babel/eslint-parser",
  'overrides': [
  ],
  'parserOptions': {
    'requireConfigFile': false,
    'babelOptions': {
      'babelrc': false,
      'configFile': false,
      'presets': ["@babel/preset-react"],
    },
    "ecmaFeatures": {
      "jsx": true
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    "react/prop-types": 0,
    "react/react-in-jsx-scope": "off"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
};
