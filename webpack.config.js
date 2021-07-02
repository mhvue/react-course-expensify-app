//entry point 
//where to output bundle file
const path = require("path");
const MiniCssExtractPlugin= require("mini-css-extract-plugin");
const webpack  = require("webpack");

process.env.NODE_ENV = process.env.NODE_ENV || "development";

if (process.env.NODE_ENV === 'test') {
    require("dotenv").config({ path: ".env.test" });
  } else if (process.env.NODE_ENV === 'development') {
    require('dotenv').config({ path: '.env.development' });
  }

  console.log(process.env)
  
module.exports = (env) => {
    const isProduction = env === "production";
    const CSSExtract = new MiniCssExtractPlugin({ filename: "styles.css" })
    return { 
        entry: ["babel-polyfill","./src/app.js"],
        mode: "development",
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
            CSSExtract,
            new webpack.DefinePlugin({
                'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
                "process.env.FIREBASE_APP_ID": JSON.stringify(process.env.FIREBASE_APP_ID),
                "process.env.FIREBASE_MEASUREMENT_ID": JSON.stringify(process.env.MEASUREMENT_ID)
            })
        ],
        devtool: isProduction ? "source-map":  "inline-cheap-module-source-map",
        devServer: {
            contentBase: path.join(__dirname, "public"),
            historyApiFallback: true,
            publicPath: "/dist/"
        },
    
    }
}

