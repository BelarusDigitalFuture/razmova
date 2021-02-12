const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@helpers': path.resolve(__dirname, 'src/helpers'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@actions': path.resolve(__dirname, 'src/helpers/store/actions'),
      '@constants': path.resolve(__dirname, 'src/helpers/store/constants'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
    }
  },
};