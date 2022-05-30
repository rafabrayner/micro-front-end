import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TerserWebpackPlugin from 'terser-webpack-plugin'
import { container } from 'webpack';
import { WebpackConfiguration } from 'webpack-dev-server';
import dep from './package.json';

const isProd = process.env.NODE_ENV === 'production';

const config: WebpackConfiguration = {
  mode: isProd ? 'production' : 'development',
  devtool: 'eval-source-map',
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:9000/', // Base path for all the assets within the application. Make possible to access routes direct from browser
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [
    new container.ModuleFederationPlugin({
      name: 'container',
      remotes: {
        viewClients: 'viewClients@http://localhost:9001/remoteEntry.js',
        createClient: 'createClient@http://localhost:9002/remoteEntry.js',
        viewClient: 'viewClient@http://localhost:9003/remoteEntry.js',
      },
      shared: {
        ...dep.dependencies,
        react: {
          singleton: true,
          requiredVersion: dep.dependencies.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: dep.dependencies['react-dom'],
        },
        'react-router-dom': {
          singleton: true,
          requiredVersion: dep.dependencies['react-router-dom'],
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
    port: 9000,
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    historyApiFallback: true, // index.html page will likely have to be served in place of any 404 responses
  };
}

module.exports = config;
