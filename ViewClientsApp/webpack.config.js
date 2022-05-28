const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const isProd = process.env.NODE_ENV === 'production';
const { ModuleFederationPlugin } = require('webpack').container;

const config = {
  mode: isProd ? 'production' : 'development',
  devtool: 'eval-source-map',
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:9001/', // Base path for all the assets within the application. Make possible to access routes direct from browser
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'viewClients',
      filename: 'remoteEntry.js',
      exposes: {
        './ViewClientsApp': path.resolve(
          __dirname,
          'src',
          'pages',
          'ViewClients'
        ),
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: '^18.1.0',
        },
        'react-dom': {
          singleton: true,
          requiredVersion: '^18.1.0',
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};

if (isProd) {
  config.optimization = {
    minimizer: [new TerserWebpackPlugin()],
  };
} else {
  config.devServer = {
    port: 9001,
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    historyApiFallback: true, // index.html page will likely have to be served in place of any 404 responses
  };
}

module.exports = config;
