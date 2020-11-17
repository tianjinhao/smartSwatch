const path = require('path')

const {
  override,
  addWebpackAlias,
  addDecoratorsLegacy
} = require('customize-cra')


function resolve(dir) {
  return path.join(__dirname, dir)
}



const customize = () => (config, env) => {
  config.resolve.alias['@'] = resolve('src')
  if (env === 'production') {
      config.externals = {
          'react': 'React',
          'react-dom': 'ReactDOM'
      }
  }
  return config
};


module.exports = override(
  addWebpackAlias({
    "@": path.resolve(__dirname, 'src/'),
    "@a": path.resolve(__dirname, 'src/assets/'),
    "@c": path.resolve(__dirname, 'src/components'),
    "@u": path.resolve(__dirname, 'src/utils'),
    "@v": path.resolve(__dirname, 'src/view'),
    "@ad": path.resolve(__dirname, 'src/view/admin/')
  }),
  addDecoratorsLegacy(),
  customize()
)