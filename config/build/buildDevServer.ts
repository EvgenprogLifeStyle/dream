import {BuildOptions} from "./types/config";
import type {Configuration as DevServerConfiguration} from 'webpack-dev-server'

export function buildDevServer(options: BuildOptions): DevServerConfiguration {

    return {
        port: options.port, // порт
        open: true, // открытие страницы в браузере
        historyApiFallback:true,
        hot:true
    }
}
