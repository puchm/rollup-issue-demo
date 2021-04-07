import babel from '@rollup/plugin-babel';
import pkg from './package.json'
import resolve from '@rollup/plugin-node-resolve'

const extensions = ['.ts', '.js', '.tsx', '.jsx', '.json'];

const config = {
    input: 'src/main.ts',
    output: {
        dir: 'lib',
        format: 'cjs'
    },
    external: [
        Object.keys(pkg.dependencies)
    ],
    plugins: [
        resolve({ 
            extensions
        }),
        babel({
            extensions: extensions,
            babelHelpers: 'runtime'
        })
    ]
}

export default config;