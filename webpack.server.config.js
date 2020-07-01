const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = (env) => {
  const plugins = [
    // new ExtractTextPlugin("css/[name].[hash].css")
    new ExtractTextPlugin("css/[name].css")
      //AQUI ARRIBA SE QUITA EL HASH PARA QUE SEA MAS FACIL DE DEBUGGEAR Y COMPILAR

  ]

  if (env.NODE_ENV === 'production') {
    plugins.push(
      new CleanWebpackPlugin(['dist'], {root: __dirname})
    )
  }

  return {

    entry: {
      "app": path.resolve(__dirname, 'src/pages/containers/app.js'),
      // "redux": path.resolve(__dirname, 'src/entries/redux.js'),
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
    //   filename: 'js/[name].[hash].js',
      filename: 'ssr/[name].js',
      //AQUI ARRIBA SE QUITA EL HASH PARA QUE SEA MAS FACIL DE DEBUGGEAR Y COMPILAR Y AGREGA EL SSR PORQUE ESA ES LA CARPETA EN LA CUAL QUIERO QUE ME GUARDE EL ARCHIVO
    //   publicPath: path.resolve(__dirname, 'dist')+"/",
      publicPath:"/",
      //AQUI ARRIBA SE QUITA ESE PEDAZO DE CODIGO PORQUE QUEREMOS QUE LA RUTA PARTA DESDE DONDE LLAMAMMOS EL ARCHIVO EXACTAMENTE.
      chunkFilename: 'js/[id].js',
      libraryTarget: 'commonjs2',
    },
    devServer: {
      port: 9000,
    },
    target: 'node',
    module: {
      rules: [
        {
          // test: que tipo de archivo quiero reconocer,
          // use: que loader se va a encargar del archivo
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react', 'stage-2'],
            }
          },
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                }
              }
            ]
          })
        },
        {
          test: /\.(jpg|png|gif|svg)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10000,
              fallback: 'file-loader',
              name: 'images/[name].[ext]',
            }
          }
        },
      ]
    },
    plugins
  }
}
