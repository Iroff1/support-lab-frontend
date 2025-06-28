const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const SiteMapPlugin = require('sitemap-webpack-plugin').default;

const paths = [
  { path: '/', lastmod: new Date().toISOString() },
  { path: '/terms', lastmod: new Date().toISOString() },
  { path: '/customerService', lastmod: new Date().toISOString() },
  { path: '/documents', lastmod: new Date().toISOString() },
  { path: '/products', lastmod: new Date().toISOString() },
];

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
    clean: true,
    assetModuleFilename: (pathData) => {
      const filepath = path
        .dirname(pathData.filename)
        .split('/')
        .slice(1)
        .join('/');
      return `${filepath}/[name].[hash][ext][query]`;
    },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@consts': path.resolve(__dirname, 'src/consts/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@containers': path.resolve(__dirname, 'src/containers/'),
      '@models': path.resolve(__dirname, 'src/models/'),
      '@api': path.resolve(__dirname, 'src/api/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@layout': path.resolve(__dirname, 'src/layout/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@store': path.resolve(__dirname, 'src/store/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif|mp4|webp|ico|json)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/[name][ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.png',
    }),
    new Dotenv(),
    new SiteMapPlugin({ base: 'https://www.plankit.kr', paths }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/robots.txt', to: '.' }, // public 디렉토리 전체를 dist로 복사
      ],
    }),
  ],
  watchOptions: {
    poll: true,
    ignored: '/node_modules/',
  },
};
