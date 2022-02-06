const path = require('path');

module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js'
    },
    resolve:{
        extensions: ["*", ".js"]
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    }
}