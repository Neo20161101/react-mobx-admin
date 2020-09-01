/* config-overrides.js */

const { override, addDecoratorsLegacy, fixBabelImports, addLessLoader,addWebpackAlias } = require('customize-cra');
module.exports = override(
    fixBabelImports('import', { //配置按需加载
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addWebpackAlias({//路径别名
        "@": require('path').resolve(__dirname, "src")
    }),
    addLessLoader({
        javascriptEnabled: true,
        // strictMath: true,
        // noIeCompat: true,
        modifyVars: {
            '@primary-color': '#ff0000', // 全局主色
            '@link-color': '#1890ff', // 链接色
            '@success-color': '#52c41a', // 成功色
            '@warning-color': '#faad14', // 警告色
            '@error-color': '#f5222d', // 错误色
            '@font-size-base': '14px', // 主字号
            '@heading-color': 'rgba(0, 0, 0, 0.85)', // 标题色
            '@text-color': 'rgba(0, 0, 0, 0.65)', // 主文本色
            '@text-color-secondary': 'rgba(0, 0, 0, .45)', // 次文本色
            '@disabled-color': 'rgba(0, 0, 0, .25)', // 失效色
            '@border-radius-base': '4px', // 组件/浮层圆角
            '@border-color-base': '#d9d9d9', // 边框色
            '@box-shadow-base': '0 2px 8px rgba(0, 0, 0, 0.15)', // 浮层阴影
        },
        // cssLoaderOptions: {}, // .less file used css-loader option, not all CSS file.
        // cssModules: {
        //     localIdentName: "[path][name]__[local]--[hash:base64:5]", // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
        // },
    }),
    addDecoratorsLegacy(),
//      (config)=>{ //暴露webpack的配置 config ,evn
//        // 去掉打包生产map 文件
//        // config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false;
//        if(process.env.NODE_ENV==="production") config.devtool=false;
//        if(process.env.NODE_ENV!=="development") config.plugins = [...config.plugins,...myPlugin]
//        //1.修改、添加loader 配置 :
//        // 所有的loaders规则是在config.module.rules(数组)的第二项
//        // 即：config.module.rules[2].oneof  (如果不是，具体可以打印 一下是第几项目)
//        // 修改 sass 配置 ，规则 loader 在第五项(具体看配置)
//        const loaders = config.module.rules.find(rule => Array.isArray(rule.oneOf)).oneOf;
//        loaders[5].use.push({
//          loader: 'sass-resources-loader',
//          options: {
//            resources: path.resolve(__dirname, 'src/asset/base.scss')//全局引入公共的scss 文件
//          }
//      })
//
//
//        return config
//      }
);