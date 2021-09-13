module.exports = {
    preset: 'jest-expo',
    verbose: true,
    setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
};
