const { extendDefaultPlugins } = require("svgo");

module.exports = {
    presets: ["next/babel"],
    plugins: [
        [
            "inline-react-svg",
            {
                svgo: {
                    plugins: extendDefaultPlugins([
                        {
                            name: "removeViewBox",
                            active: false,
                        },
                    ]),
                },
            },
        ],
    ],
};
