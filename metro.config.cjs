const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration for React Native
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const defaultConfig = getDefaultConfig(__dirname);

// You can customize the configuration here
const customConfig = {
  transformer: {
    // Add any transformer options if needed
  },
  resolver: {
    sourceExts: ['js', 'jsx', 'ts', 'tsx', 'json', 'cjs'], // Customize file extensions if needed
  },
};

module.exports = mergeConfig(defaultConfig, customConfig);
