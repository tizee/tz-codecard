module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.[jt]sx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: ['./test/test.setup.js'],
};
