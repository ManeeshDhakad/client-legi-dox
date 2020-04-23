import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

module.exports = env => {
  console.log(env)
  return {
    entry: {
      index: path.join(__dirname, 'index.js')
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].bundle.js'
    },
    mode: process.env.NODE_ENV || 'development',
    resolve: {
      modules: [path.resolve(__dirname), 'node_modules']
    },
    devServer: {
      contentBase: path.join(__dirname, 'src')
    },
    node: {fs: 'empty'},
    module: {
      rules: [
        {
           test: /\.(js|jsx)$/,
           exclude: /(node_modules)/,
           use: ['babel-loader']
        },

        {
          test: /\.(css|scss)$/,
          use: [
            "style-loader",
            "css-loader"
          ]
        },

        {
          test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
          loaders: ['file-loader']
        }

         
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'index.html')
      }),

      new webpack.DefinePlugin({
        PROD: env = 'prod' ? JSON.stringify(true): JSON.stringify(false),
        LOCAL: env = 'local' ? JSON.stringify(true): JSON.stringify(false),
        DEV: env = 'dev' ? JSON.stringify(true): JSON.stringify(false),
        TEST: env = 'test' ? JSON.stringify(true): JSON.stringify(false),

      }),
    ],
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      port:8080,
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    }
  }
}
