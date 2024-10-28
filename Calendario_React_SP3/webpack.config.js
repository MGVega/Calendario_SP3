const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Archivo de entrada principal
  output: {
    path: path.resolve(__dirname, 'dist'), // El directorio de salida para el bundle
    filename: 'bundle.js', // Nombre del archivo bundle generado
    publicPath: '/', // Ruta base para servir los archivos
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Para manejar archivos JavaScript y JSX
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/, // Para manejar archivos CSS
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Extensiones que Webpack manejará
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Usar tu archivo HTML como plantilla
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Servir archivos estáticos desde la carpeta public
    },
    compress: true,
    port: 3000, // Puerto del servidor de desarrollo
  },
};
