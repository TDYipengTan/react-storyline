export default {
  preset: 'ts-jest',
  clearMocks: true,
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(css|less)$': './styleMock.js',
  },
};
