module.exports = {
  chainWebpack: config => {
    config.mode('development');
    config.optimization.delete('splitChunks');
    config.entry('app').prepend('./src/polyfill.js') 
  },
  filenameHashing: false,
  devServer: {
    hot: false,
  }
}