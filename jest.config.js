module.exports = {
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
    '^.+\\.svelte(\\.(js|ts))?$': 'svelte-jester',
  },
  transformIgnorePatterns: ['/node_modules/(?!@testing-library/svelte/)'],
  moduleFileExtensions: ['js', 'jsx', 'svelte'],
  extensionsToTreatAsEsm: ['.svelte'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  testMatch: ['<rootDir>/src/**/*.test.js', '<rootDir>/src/**/*.test.jsx'],
  moduleNameMapper: {
    '^@lib/(.*)$': '<rootDir>/src/lib/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@context/(.*)$': '<rootDir>/src/context/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
};
