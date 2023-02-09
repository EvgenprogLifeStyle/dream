import {ResolveOptions} from "webpack";
import {BuildOptions} from "./types/config";

export function buildResolve(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'], // указываем расширение файлов, которые при импорте не указываем
        preferAbsolute: true,// абсолютные пути в приоритете
        modules: [
            options.paths.src, 'node_modules'
        ],
        mainFiles: ['index'],
        alias: {}
    }
}
