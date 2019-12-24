module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-import'),
        require('postcss-url'),
        require('postcss-preset-env'),
        require('postcss-aspect-ratio-mini'),
        require('postcss-write-svg'),
        require('postcss-px-to-viewport')({
            viewportWidth: 750,
            viewportHeight: 1334,
            unitPrecision: 3,
            viewportUnit: 'vw',
            selectorBlackList: ['.ignore', '.hairlines'],
            minPixelValue: 1,
            mediaQuery: false
        }),
        require('cssnano')
    ]
}