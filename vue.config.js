const {defineConfig} = require('@vue/cli-service')
const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

module.exports = defineConfig({
    transpileDependencies: true,
    productionSourceMap: false,
    devServer: {
        open: false,
        hot: true
    },
    publicPath: '/',
    outputDir: path.join(__dirname, 'dist'),
    configureWebpack: config => {
        console.log(process.env)
        if (process.env.NODE_ENV !== 'development') {
            config.plugins.push(
                new PrerenderSPAPlugin({
                    staticDir: path.join(__dirname, 'dist'),
                    routes: ['/', '/about', '/about2'],
                    renderer: new Renderer({
                        ignoreJSErrors: true,
                        inject: {
                            foo: 'bar'
                        },
                        headless: true,
                        // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
                        renderAfterDocumentEvent: 'render-event',
                        // renderAfterTime: 5000,
                        renderer: new PrerenderSPAPlugin.PuppeteerRenderer({
                            renderAfterTime: 5000
                        })
                    })
                }),
            )

            // 不打包第三方包
            config.externals = {
                'vue': 'Vue',
                'vue-router': 'VueRouter',
                'axios': 'axios'
            }
        }
    }
})
