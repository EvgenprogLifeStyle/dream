import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'

const config:webpack.Configuration = {
    mode: "development", // production
    entry: path.resolve(__dirname, 'src', 'index.ts'), // стартовая точка приложения
    output: { //куда помещать результат
        filename: "[name].[contenthash].js", // имя
        path: path.resolve(__dirname, 'dist'), //путь
        clean: true // очищаем
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new webpack.ProgressPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'], // указываем расширение файлов, которые при импорте не укзываем
    },
}

export default config