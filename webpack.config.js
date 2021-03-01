const path = require("path");

module.exports = {
  entry: "./mtrabski/ts/app.ts",
  output: {
    filename: "mtrabski__bundle.js",
    path: path.resolve(__dirname, "mtrabski/js"),
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
