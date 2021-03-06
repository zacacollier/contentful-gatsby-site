module.exports = {
  'extends': [
    'airbnb-base',
    'plugin:react/recommended',
  ],
  'env': {
    'node': true,
    'jasmine': true,
  },
  'globals': {
    'graphql': true,
  },
  'rules': {
    'semi': ['error', 'never'],
    'padded-blocks': 0,
    'max-len': ['error', 120],
    'no-use-before-define': ['error', 'nofunc'],
    'function-paren-newline': 0,
    'no-underscore-dangle': 0,
    'array-bracket-spacing': 0,
    'comma-dangle': ['error', {
      'arrays': 'only-multiline',
      'objects': 'only-multiline',
      'functions': 'ignore'
    }]
  }
};
