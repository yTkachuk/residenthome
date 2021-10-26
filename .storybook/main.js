const path = require("path")

module.exports = {
    stories: ["../src/**/*.stories.tsx"],
    webpackFinal: async (config, { configType }) => {
        // new code
        config.module.rules = config.module.rules.filter((rule) => {
            if (rule.test) {
                return !rule.test.test(".scss")
            }
        })

        config.module.rules.push({
            test: /\.scss$/,
            use: [
                "style-loader",
                "css-loader",
                {
                    loader: "sass-loader",
                },
                {
                    loader: require.resolve('sass-resources-loader'),
                    options: {
                      resources: [
                        path.resolve(__dirname, '../src/assets/_variables.scss')
                      ]
                    }
                },
                {
                loader: 'style-resources-loader',
                    options: {
                        patterns: [
                            path.resolve(__dirname, '../node_modules/bootstrap/dist/css/bootstrap.css')
                        ]
                    }
                }
            ],
            include: path.resolve(__dirname, "../"),
        })

        return config
    },
}