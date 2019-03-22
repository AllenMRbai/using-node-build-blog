const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const fs = require("fs");

let isDev = process.env.NODE_ENV === "development";

/*************************************************************
    通用配置 webpack common config
  **************************************************************/
let webpackConfig = {
  target: "web",
  entry: {
    main: "./viewSrc/index.js"
  },
  mode: isDev ? "development" : "production",
  resolve: {
    extensions: [".vue", ".js", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "viewSrc")
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ["vue-loader"]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: "file-loader",
        options: {
          name: "fonts/[name].[ext]"
        }
      },
      {
        test: /\.html$/,
        use: "html-loader"
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
};

if (isDev) {
  /*************************************************************
    开发环境 webpack development config
  **************************************************************/

  // 设置输出
  webpackConfig.output = {
    filename: "main.js",
    path: path.resolve(__dirname, "views"),
    publicPath: "/"
  };

  // devServer配置
  webpackConfig.devServer = {
    proxy: {
      "/api": "http://localhost:3000"
    },
    historyApiFallback: true
  };

  // 添加source map
  webpackConfig.devtool = "cheap-eval-source-map";

  // 使用style-loader加载样式
  webpackConfig.module.rules.push(
    {
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"]
    },
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    }
  );

  // 使用file-loader加载图片
  webpackConfig.module.rules.push({
    test: /\.(png|jpg|jpeg|gif|svg)$/,
    use: "file-loader"
  });

  // 使用 html-webpack-plugin 注入脚本
  webpackConfig.plugins.push(
    new HtmlWebpackPlugin({
      template: "./viewSrc/template.html"
    })
  );
} else {
  /*************************************************************
    生产环境 webpack production config
  **************************************************************/

  // 设置输出
  webpackConfig.output = {
    filename: "[name].[contentHash].js",
    path: path.resolve(__dirname, "views"),
    publicPath: "/"
  };

  // 使用mini-css-extract-plugin抽取样式
  webpackConfig.module.rules.push(
    {
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        "css-loader",
        "postcss-loader",
        "sass-loader"
      ]
    },
    {
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
    }
  );
  webpackConfig.plugins.push(
    new MiniCssExtractPlugin({
      filename: "[name].[contentHash].css"
    })
  );

  // 使用url-loader加载图片
  webpackConfig.module.rules.push({
    test: /\.(png|jpg|jpeg|gif|svg)$/,
    use: [
      {
        loader: "url-loader",
        options: {
          limit: 1024,
          filename: "[name].[hash].[ext]"
        }
      }
    ]
  });

  // 添加source map
  webpackConfig.devtool = "source-map";

  // 打包优化,主要做以下操作
  // css html js代码压缩
  // 抽离 vendor
  // 抽离 runtime
  webpackConfig.optimization = {
    // 抽离runtime
    runtimeChunk: "single",
    // 配置代码压缩工具
    minimizer: [
      // 压缩js代码，记得开启source map
      new TerserWebpackPlugin({ sourceMap: true }),
      // 压缩html
      new HtmlWebpackPlugin({
        template: "./viewSrc/template.html",
        minify: {
          // 移除空白符（空格 换行等）
          collapseWhitespace: true,
          // 移除注释
          removeComments: true
        }
      }),
      // 压缩css
      new OptimizeCSSAssetsPlugin()
    ],
    // 抽离 vendor（第三方库）
    splitChunks: {
      chunks: "all",
      minSize: 80 * 1024,
      maxInitialRequests: Infinity,
      minChunks: 1,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: function(module, chunks, chacheGroupKey) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];
            return `vendor_${packageName.replace("@", "")}`;
          }
        }
      }
    }
  };

  webpackConfig.plugins.push(
    // 防止打包后的contentHash每次打包不一的bug
    new webpack.HashedModuleIdsPlugin(),
    // 每次重新打包前，先清除输出目录
    new CleanWebpackPlugin()
  );
}

module.exports = webpackConfig;
