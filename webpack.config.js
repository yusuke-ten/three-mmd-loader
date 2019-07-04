const path = require('path')
const webpack = require('webpack')

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    'mmd-loader': './index.ts'
  },
  output: {
		library: 'THREE.MMDLoader',
		libraryExport: 'default',
		libraryTarget: 'umd',
		filename: '[name].js',
    publicPath: "/dist/",		
    path: path.join(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        // TypeScript をコンパイルする
        use: 'ts-loader'
      }
    ]
	},
	devServer: {
    contentBase: 'example',
    port: 8080
  }
}
