module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          screens: './src/screens',
          components: './src/components',
          constants: './src/constants',
          styles: './src/styles',
          services: './src/services',
          navigation: './src/navigation',
          helpers: './src/helpers',
        },
      },
    ],
  ],
};
