const path = require("path")

module.exports = {
    entry: "./app/assets/script/App.js",
    output: {
        filename: "bundles.js",
        path: path.resolve(__dirname, "app")
    },
    mode: "development"
    watch: true,
    module: {
        rules: [{
            test: /\.css$/i,
            use: ["css-loader"]
        }]
    }

}