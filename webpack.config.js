var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: {
        'polyfills': [
            'core-js/es6',
            'core-js/es7/reflect',
            'zone.js/dist/zone'
        ],
        vendor:["@angular/common",
            "@angular/compiler",
            "@angular/core",
            "@angular/forms",
            "@angular/http",
            "@angular/platform-browser",
            "@angular/platform-browser-dynamic",
            "@angular/router",
            "rxjs",
            "jquery",
            "jquery-ui",
            "bootstrap"
        ],
        'app': './src/main.ts'

    },
    output: {
        path: './www/lib/js',
        filename: '[name].[hash].js'
    },
    module: {
        loaders: [
            {test: /\.component.ts$/, loader: 'ts!angular2-template'},
            {test: /\.ts$/, exclude: /\.component.ts$/, loader: 'ts'},
            {test: /\.html$/, loader: 'raw'},
            {test: /\.css$/, loader: 'raw'}
        ]
    },
    resolve: {
        extensions: ['', '.js', '.ts', '.html', '.css']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['polyfills','vendor']
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename:'../../index.html'
        }),
        new webpack.DefinePlugin({
            app: {
                environment: JSON.stringify(process.env.APP_ENVIRONMENT || 'development')
            }
        })
    ]

};
