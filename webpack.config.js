import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let htmlPageNames = [
    ["about", "about"],
    ["projects/featured", "featured"],
    ["projects/web", "web"],
    ["projects/mobile", "mobile"],
    ["projects/misc", "misc"]
];
let multipleHtmlPlugins = htmlPageNames.map((name) => {
    return new HtmlWebpackPlugin({
        template: `./src/${name[0]}/${name[1]}.html`, // relative path to the HTML files
        filename: `${name[1]}.html`, // output HTML files
        chunks: [`${name[1]}`] // respective TS files
    });
});

export const entry = {
    main: "./src/main/ts/index.ts",
    about: "./src/about/ts/about.ts",
    featured: "./src/projects/featured/ts/featured.ts",
    web: "./src/projects/web/ts/web.ts",
    mobile: "./src/projects/mobile/ts/mobile.ts",
    misc: "./src/projects/misc/ts/misc.ts"
};
export const output = {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "[name][ext]",
    clean: true
};
export const devtool = "source-map";
export const module = {
    rules: [
        {
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "sass-loader"]
        },

        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        },

        {
            test: /\.ts$/,
            exclude: /node_modules/,
            use: { loader: "ts-loader" }
        },

        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: { presets: ["@babel/preset-env"] }
            }
        },

        {
            test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|ttf|eot|ogg|mp3|wav|mov|mp4|webm)$/i,
            type: "asset/resource"
        },

        {
            test: /\.(pdf)$/,
            use: [
                {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "assets/pdfs/"
                    }
                }
            ]
        }
    ]
};
export const resolve = {
    extensions: [".ts", ".js"]
};
export const plugins = [
    new HtmlWebpackPlugin({
        template: "./src/main/index.html",
        filename: "index.html",
        chunks: ["main"]
    }),

    new BundleAnalyzerPlugin({
        openAnalyzer: false
    })
].concat(multipleHtmlPlugins);
