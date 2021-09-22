import path from 'path'
import webpack from 'webpack'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

const outputPath = path.resolve(__dirname, 'progress-it')

module.exports = {
  mode: process.env.NODE_ENV,
  target: 'web',
  entry: path.join(__dirname, 'src/index.ts'),
  output: {
    path: outputPath,
    filename: 'index.min.js',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  devServer: {
    open: true,
    port: 8080,
    host:"172.16.26.69",
    writeToDisk: true,
    contentBase: outputPath
  },
  optimization: {
    minimize: true
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      esmodules: true
                    }
                  }
                ]
              ]
            }
          },
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'example',
          to: outputPath
        }
      ]
    })
  ]
} as webpack.Configuration