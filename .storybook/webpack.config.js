const path = require("path");
const GoogleFontsPlugin = require("google-fonts-webpack-plugin");

module.exports = (baseConfig, env, defaultConfig) => {
    defaultConfig.module.rules.push(
            {
                "test": /\.s?css$/,
                include: path.resolve(__dirname, "../"),
                loaders: [
                    { loader: "css-loader", options: { sourceMap: true } },
                    "resolve-url-loader",
                    "postcss-loader",
                    { loader: "sass-loader", options: { sourceMap: true } }
                ]
            }
    );

    /*defaultConfig.plugins.push(
        new GoogleFontsPlugin({
            fonts: [
                { family: "Lato" },
                { family: "Raleway", variants: [ "400", "400i, 700" ], subsets: ["latin-ext"] }
            ]
        })
    );*/

    return defaultConfig;
};
