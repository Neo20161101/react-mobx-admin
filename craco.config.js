/* craco.config.js */
const CracoLessPlugin = require('craco-less');
const path = require("path");
module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': 'red'
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
    webpack: {
        alias:{
            "@":path.resolve("src")
        }
    }
};