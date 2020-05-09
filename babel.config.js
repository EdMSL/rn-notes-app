module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
           "$db": "./src/db",
           "$modules": "./src/modules",
           "$modules": "./src/modules",
           "$navigation": "./src/navigation",
           "$screens": "./src/screens",
           "$components": "./src/components",
           "$constants": "./src/constants",
           "$redux": "./src/redux",
           "$utils": "./src/utils",
        }
      }
    ]
  ]
};
