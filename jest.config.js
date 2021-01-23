module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js', 'jsx'],
  modulePaths: [
    '<rootDir>',
  ],
  projects: [
    {
      displayName: 'node',
      testEnvironment: 'node',
      snapshotSerializers: ['enzyme-to-json/serializer'],
      testMatch: ['**/__tests__/**/*.test.js?(x)'],
    },
    {
      displayName: 'node',
      testEnvironment: 'node',
      testMatch: [
        '**/__tests__/**/*.test.node.js?(x)',
      ],
    },
  ],
  setupFilesAfterEnv: ['jest-enzyme'],
  testEnvironmentOptions: {
    enzymeAdapter: 'react16',
  },
  transform: {
    '\\.jsx$': 'babel-jest',
  },
};
