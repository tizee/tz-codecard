// more on https://babeljs.io/docs/en/presets#preset-options
const presets = [
  '@babel/preset-react',
  // '@babel/preset-env',
  // [
  //   '@babel/preset-env',
  //   {
  //     targets: {
  //       node: 'current',
  //     },
  //   },
  // ],
  // '@babel/preset-typescript',
  [
    '@babel/preset-typescript',
    {
      // isTsx: true, // Forcibly enables jsx parsing.
      jsxPragma: false, // Replace the function used when compiling JSX expressions
      // allExtensions: true, // Indicates that every file should be parsed as TS or TSX (depending on the isTSX option).
      // allowNamespaces: true, // Enables compilation of TypeScript namespaces.
      // allowDeclareFields: false, // default true in Babel 8
      // onlyRemoveTypeImports: false, // When set to true, the transform will only remove type-only imports (introduced in TypeScript 3.8).
    },
  ],
];

const plugins = ['@babel/plugin-proposal-class-properties'];

const ignore = ['dist'];

module.exports = {
  presets,
  // plugins,
  // ignore,
};
