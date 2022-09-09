module.exports = {
  "preset": "ts-jest",
  "testEnvironment": "node",
  "transform": {
    "node_modules/@layerzerolabs/scan-client/.+\\.(j|t)sx?$": "ts-jest"
  },
  "transformIgnorePatterns": [
    "node_modules/(?!@layerzerolabs/scan-client/.*)"
  ]
};