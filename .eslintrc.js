module.exports = {
  extends: 'get-off-my-lawn',
  rules: {
    'react/prop-types': 0,
    'react/jsx-sort-props': 0,
    'react/jsx-no-literals': 0,
    'react/display-name': 0,
    'react/no-unescaped-entities': 0,
    'sort-keys': 0,
    'objects/no-object-properties-one-line': 0,
    'node/no-unpublished-require': 0,
    camelcase: [
      'error',
      {
        allow: [
          'consumer_key',
          'consumer_secret',
          'access_token',
          'access_token_secret'
        ]
      }
    ]
  }
};
