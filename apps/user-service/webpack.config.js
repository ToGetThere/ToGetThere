const { composePlugins, withNx } = require('@nrwl/webpack');

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), (config) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`
  if (process.env.DEV_PLATFORM === 'DOCKER') {
    // Make Hot Module Reload (HMR) works
    // Use polling mechanism to handle Filesystem disparities among diff OS
    config.watchOptions = {
      aggregateTimeout: 500,
      poll: 500,
    }

    // Handle WebSocket port binding when Docker Host:Container port is different
    config.devServer = {
      ...config.devServer,
      client: {
        webSocketURL: "auto://0.0.0.0:0/ws",
      },
    };
  }

  return config;
});
