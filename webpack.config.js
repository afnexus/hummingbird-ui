const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Define output path for the bundled file
module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    globalObject: "this",
    publicPath: "auto",
    library: {
      name: "hummingbird-ui",
      type: "umd",
    },
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(ttf|woff2)$/,
        type: "asset/resource",
      },
    ],
  },
};
