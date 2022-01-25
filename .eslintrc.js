module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 'off', // react prop-types 필수로 적용안해도 됨
    'no-console': 'off', // 콘솔 사용 허용
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }], // js파일에서도 jsx 문법 사용 가능},
  },
};
