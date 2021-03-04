const path = require("path");

module.exports = {
  entry: "./ts/app.ts",
  output: {
    filename: "mtrabski-bundle.js",
    path: path.resolve(__dirname, "js"),
    publicPath: "js",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
