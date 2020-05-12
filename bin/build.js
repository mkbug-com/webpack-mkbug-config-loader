const path = require('path');
const webpack = require('webpack');
const root = path.resolve(__dirname, '..');
const config = require(`${root}/webpack.config.js`)

process.env.NODE_ENV = 'prod'

webpack(config, (err, stats) => {
  if (err) {
    console.error(err)
  } else {
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n')
  }
})