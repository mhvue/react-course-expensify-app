//entry point 
//where to output bundle file
const path = require("path");
const MiniCssExtractPlugin= require("mini-css-extract-plugin");

module.exports = (env) => {
    const isProduction = env === "production";
    const CSSExtract = new MiniCssExtractPlugin({ filename: "styles.css" })

    console.log("env", env)
    return { 
        entry: "./src/app.js",
        output: {
            path: path.join(__dirname, "public","dist"),
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
                use: [MiniCssExtractPlugin.loader, 
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },  {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }]
            }]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? "source-map":  "inline-cheap-module-source-map",
        devServer: {
            contentBase: path.join(__dirname, "public"),
            historyApiFallback: true,
            publicPath: "/dist/"
        }
    
    }
}



//loader - let u customize a file when it loads 