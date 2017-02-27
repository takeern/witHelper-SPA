/**
 * Created by Administrator on 2016/11/19.
 */
const webpack = require('webpack');

const vendors = [
    'react',
    'react-dom',
];

module.exports = {
    output: {
        path: 'build',
        filename: 'lib.js',
        library: '[name]',
    },
    entry: {
        "lib": vendors,
    },
    plugins: [
        new webpack.DllPlugin({
            path:'manifest.json',
            name: '[name]',
            context: __dirname,
        }),
    ],
};