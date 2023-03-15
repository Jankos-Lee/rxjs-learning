const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const env =  process.env.NODE_ENV || 'development';
const webpackConfig = require('./webpack.dev.js')(env);

const compiler = Webpack(webpackConfig);
const devServerOptions = { ...webpackConfig.devServer, open: true };
const server = new WebpackDevServer(devServerOptions, compiler);

const runServer = async () => {
  console.log('Starting server...');
  await server.start();
};

runServer();