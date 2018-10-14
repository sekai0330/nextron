const { existsSync, readFileSync } = require('fs')
const { join, resolve } = require('path')
const webpack = require('webpack')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const cwd = process.cwd()
const externals = require(resolve(cwd, 'package.json')).dependencies

module.exports = (env, ext) => {
  const baseConfig = {
    mode: env,
    target: 'electron-main',
    node: {
      __dirname: false,
      __filename: false
    },
    externals: [...Object.keys(externals || {})],
    devtool: 'source-map',
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
      alias: {
        env: resolve(cwd, `env/${env}.json`)
      },
      modules: [join(cwd, 'app'), 'node_modules']
    },
    output: {
      libraryTarget: 'commonjs2'
    },
    module: {
      rules: [
        {
          test: /\.jsx$/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          },
          exclude: [
            /node_modules/,
            resolve(cwd, 'renderer')
          ]
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
      new FriendlyErrorsWebpackPlugin({ clearConsole: env === 'development' })
    ]
  }

  if (ext === 'ts') {
    baseConfig.resolve.extensions.push('.ts', '.tsx')
    baseConfig.module.rules.push({
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: [
        /node_modules/,
        resolve(process.cwd(), 'renderer')
      ]
    })
  }

  return baseConfig
}
