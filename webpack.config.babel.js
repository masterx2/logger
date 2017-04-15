/**
 * Created by masterx2 on 4/15/17.
 */

import path from 'path';
import CleanWebpackPlugin from 'clean-webpack-plugin';

const context = process.cwd();
const root = path.join(context, '/dist');
const src = path.join(context, '/src/Script/');

export default {
    context: context,
    entry: {
        logger: src + 'logger.js'
    },
    output: {
        path: root,
        filename: '[name].js',
        libraryTarget: "var",
        library: "Logger"
    },
    devtool: '#source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin([root], {
            root: context
        })
    ]
};
