var webpack = require('webpack');
const path = require('path');
const HtmlWebpackTemplate = require('html-webpack-template');
const HtmlWebpackPlugin = require('html-webpack-plugin');

require('dotenv').config({ path: path.join(__dirname, '.env') })

module.exports = {
  entry:'./src/index.js',
  devtool: 'source-map',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist'),
    publicPath: './'
  },
    module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: ["babel-plugin-transform-class-properties"]
          }
        }
      },
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, 'node_modules', 'react-datepicker'),
          path.resolve(__dirname, 'node_modules', 'leaflet'),
          path.resolve(__dirname, 'node_modules', 'react-select'),
          path.resolve(__dirname, 'node_modules', 'drmonty-leaflet-awesome-markers'),
          path.resolve(__dirname, 'node_modules', 'font-awesome'),
          path.resolve(__dirname, 'node_modules', 'bootstrap'),
          path.resolve(__dirname, 'src')
        ],
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|eot|woff|woff2|ttf)$/i,
        include: [
          path.resolve(__dirname, 'node_modules', 'leaflet'),
          path.resolve(__dirname, 'node_modules', 'drmonty-leaflet-awesome-markers'),
          path.resolve(__dirname, 'node_modules', 'font-awesome')
        ],
        use: 'file-loader'
      },
      {
        test: /\.(json|geojson)$/i,
        include: [
          path.resolve(__dirname, 'src', 'data')
        ],
        use: 'json-loader'
      }
    ]
  },
  plugins: [
   new HtmlWebpackPlugin(
     {
       inject: false,
       title: 'react-three-model-loader',
       template: HtmlWebpackTemplate,
       appMountId: 'app',
       meta: [
         {
           name: 'description',
           content: 'Load 3D JSON models with three + react + redux'
         }
       ]
     }
   )
 ]
}
