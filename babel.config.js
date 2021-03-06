module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: false,
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        corejs: false,
      },
    ],
  ],
};
