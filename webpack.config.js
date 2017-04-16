module.exports = {
    entry: './client/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        modules: [__dirname, 'node_modules'],
        alias: {
            // Здесь прописаны файлы и пути к ним, чтобы можно было в приложении обращаться к ним непосредственно
            // Greeter: 'public/components/Greeter.jsx',
            // GreeterMessage: 'public/components/GreeterMessage.jsx',
            // GreeterForm: 'public/components/GreeterForm.jsx'
        },
        extensions: ['*', '.js', '.jsx']
    },
    module: {
        loaders: [{
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-0']
            },
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/
        }]
    }
};
