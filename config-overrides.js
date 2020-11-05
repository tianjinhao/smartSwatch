const path = require('path')

const {
  override,
  addWebpackAlias
} = require('customize-cra')


module.exports = override(
  addWebpackAlias({
    "@": path.resolve(__dirname, 'src/'),
    "@a": path.resolve(__dirname, 'src/assets/'),
    "@c": path.resolve(__dirname, 'src/components'),
    "@u": path.resolve(__dirname, 'src/utils'),
    "@ad": path.resolve(__dirname, 'src/view/admin/')
  }),
)