module.exports = {
  apps: [
    {
      name: 'node-simple-api',
      script: './index.js',
      instances: 2,
      exec_mode: 'cluster',
      merge_logs: true,
      env_production: {
        DEBUG: false,
        NODE_ENV: 'production',
        APP_PORT: 3000,
      },
    },
  ],
};