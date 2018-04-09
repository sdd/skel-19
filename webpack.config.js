const {
    createConfig,
    defineConstants,
    env,
    entryPoint,
    setOutput,
    sourceMaps
} = require('@webpack-blocks/webpack2');
const babel = require('@webpack-blocks/babel6');
const devServer = require('@webpack-blocks/dev-server2');
const postcss = require('@webpack-blocks/postcss');
const autoprefixer = require('autoprefixer');
const html = require('webpack-blocks-html');

module.exports = createConfig([
    entryPoint('./src/index.js'),
    setOutput('./dist/bundle.js'),
    babel(),
    postcss([
        autoprefixer({ browsers: ['last 2 versions'] })
    ]),
    defineConstants({
        'process.env.NODE_ENV': process.env.NODE_ENV
    }),
    env('development', [
        devServer({
            publicPath: '/',
            historyApiFallback: true
        }),
        devServer.proxy({
            '/api': { target: 'http://localhost:3001' }
        }),
        sourceMaps()
    ]),
    html({})
]);
