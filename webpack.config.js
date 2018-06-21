const path = require('path');
const HOSTNAME = 'syncshout.devel';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const GoogleFontsPlugin = require("google-fonts-webpack-plugin");
const convert = require('koa-connect');
const history = require('connect-history-api-fallback');
const proxy = require('http-proxy-middleware');

module.exports = {
    entry: {
        main: [
            "./src",
            "./styles/main.scss"
        ]
    },
    output: { filename: "bundle.js", path: "/Users/scotty/workspace/skel17-client/dist", publicPath: "/" },
    resolve: { extensions: [".css", ".js", ".jsx", ".json"] },
    stats: { "children": false, "chunks": false, "modules": false, "reasons": false },
    module: {
        rules: [
            {
                "test": /\.s?css$/,
                "use": ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                // modules: true,
                                sourceMap: true,
                                importLoaders: 1
                            }
                        },
                        { loader: "resolve-url-loader" },
                        {
                            loader: "sass-loader", "options": {
                                sourceMap: true
                            }
                        },
                        "postcss-loader"
                    ]
                })
            }, {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 50000,
                        name: './fonts/[name].[ext]'
                    }
                }]
            }, {
                "test": /.jsx?$/,
                "exclude": /^.*node_modules.*$/,
                "use": [{ "loader": "babel-loader", "options": { "cacheDirectory": true } }]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({ "process.env.NODE_ENV": "\"development\"" }),
        new ExtractTextPlugin({
            filename: "[name]--[md5:contenthash:hex:8].css",
            allChunks: true
        }),
        new GoogleFontsPlugin({
            fonts: [
                { family: "Lato" },
                { family: "Raleway", variants: [ "400", "400i, 700" ], subsets: ["latin-ext"] }
            ]
            /* ...options */
        }),
        new HtmlWebpackPlugin({}),
        new webpack.NamedModulesPlugin(),
        new webpack.LoaderOptionsPlugin({
            debug: true
        })
    ],
    devtool: "cheap-module-source-map"
};

module.exports.mode = "development";
module.exports.serve = {
    host: HOSTNAME,
    port: 3000,
    content: [__dirname],
    add: (app, middleware, options) => {
        app.use(convert(proxy('/api', {
            target: `http://${ HOSTNAME }:3001`,
            pathRewrite: { '^/api': '' }
        })));
        app.use(convert(history()));
    }
};
