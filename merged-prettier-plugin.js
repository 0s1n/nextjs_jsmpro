const tailwind = require('prettier-plugin-tailwindcss/dist/index');
const sortImports = require('@trivago/prettier-plugin-sort-imports');

const combinedFormatter = {
    parsers: {
        typescript: {
            ...tailwind.parsers.typescript,
            preprocess: sortImports.parsers.typescript.preprocess,
        },
    },
};

module.exports = combinedFormatter;