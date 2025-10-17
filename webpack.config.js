const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    publicPath: "auto",
    path: path.resolve(__dirname, "dist"),
    filename: "price-setup",
    clean: true,
  },
  resolve: {
    extensions: [".jsx", ".js"],
  },
  devServer: {
    port: 3011,
    host: "0.0.0.0",
    historyApiFallback: true,
    allowedHosts: "all",
    static: {
      directory: path.join(__dirname, "public"),
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },
  module: {
    rules: [
      { test: /\.jsx?$/, use: "babel-loader", exclude: /node_modules/ },
      {
        test: /tailwind\.css(\?.*)?$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader",
        ],
      },
      {
        test: /\.css$/,
        exclude: /tailwind\.css(\?.*)?$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "priceSetup",
      filename: "remoteEntry.js",
      remotes: {
        uiLibrary: `uiLibrary@${
          (process.env.BASE_URL ? process.env.BASE_URL + "/uiLibrary" : "http://localhost:3001")
        }/remoteEntry.js`,
      },
      exposes: {
        "./Page": "./src/Page.jsx",
      },
      shared: {
        react: {
          singleton: true,
          strictVersion: true,
          requiredVersion: "18.3.1",
        },
        "react-dom": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "18.3.1",
        },
        "react-router-dom": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "6.30.1",
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
