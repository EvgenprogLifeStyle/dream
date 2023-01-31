import {BuildOptions} from "./types/config";
import webpack from "webpack";
import path from "path";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolve} from "./buildResolve";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths,mode,isDev} = options

    return {
        mode,
        entry: paths.entry , // стартовая точка приложения
        output: {
            //куда помещать результат
            filename: "[name].[contenthash].js", // имя
            path: paths.build,
            clean: true // очищаем
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolve(),
        devtool: isDev ? 'inline-source-map' : undefined, // исходная карта файлов
        devServer: isDev ?  buildDevServer(options) : undefined
    }

}