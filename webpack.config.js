//entry point 
//where to output bundle file
const path = require("path");

console.log(path.join(__dirname, "public"));

module.exports = { 
    mode: "development",
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            loader: "babel-loader",
            test: /\.js$/,
            exclude: /node_modules/,
            options: {
            presets: [

                ['@babel/preset-env', 
                    { 
                        'useBuiltIns': 'entry',
                        'corejs': '^3.12.1',
                        /* 'targets': {
                                    'esmodules': true,
                                    'ie': '11'
                                    } */
                    }
                ],
                '@babel/preset-react',
            ],
            plugins: ['babel-plugin-transform-class-properties']

        }
        }, {
            test: /\.s?css$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader",
            ]
        }]
    },

    devtool: "eval-cheap-module-source-map",
    devServer: {
        contentBase: path.join(__dirname, "public"),
        historyApiFallback: true
    }

}

//loader - let u customize a file when it loads 