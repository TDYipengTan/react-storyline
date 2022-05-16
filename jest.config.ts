export default {
  clearMocks: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(css|less)$': './styleMock.js',
  },
};
