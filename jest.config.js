module.exports = {
    preset: 'jest-expo',
    setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: ['src/**/store/*.tsx', '!src/**/*.spec.tsx'],
    collectReporters: ['json', 'lcov'],
};
