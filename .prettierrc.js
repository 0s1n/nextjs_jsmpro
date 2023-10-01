module.exports = {
    semi: true,
    trailingComma: 'all',
    singleQuote: true,
    printWidth: 95,
    tabWidth: 2,
    jsxSingleQuote: true,
    bracketSpacing: true,
    importOrderParserPlugins: [
        'classProperties',
        '["decorators", { "decoratorsBeforeExport": true }]',
        'typescript',
        'jsx',
    ],
    importOrder: [
        'expo/build/Expo.fx',
        '<THIRD_PARTY_MODULES>',
        '^[./]',
    ],
    plugins: [require('./merged-prettier-plugin')],
}