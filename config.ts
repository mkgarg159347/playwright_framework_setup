// jest.config.ts
import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
    verbose: true,
    preset: "jest-playwright-preset",

    // bail: 0 run all the tests, set bail to n or true to fail after certain number of errors
    bail: 0,

    // Name to identify the automation execution
    displayName: {
        name: 'automated_e2e_test',
        color: 'blue',
    },

    forceCoverageMatch: ["**/*.t.js"],

    notify: true,
    notifyMode: "always",

    projects: ["<rootDir>"],

    setupFiles: [],
    // testMatch: ["**/*.t.js"],
    testRegex: "(/__tests__/.*|(\\.|/)(text|spec))\.(jsx?|tsx?)$",
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    roots: [
        "<rootDir>"
    ],
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ]
};

export default config;