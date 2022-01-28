module.exports = {
    trailingSlash: true,
    poweredByHeader: false,
    reactStrictMode: true,
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    {
                        key: "Strict-Transport-Security",
                        value: "max-age=63072000; includeSubDomains",
                    },
                    { key: "X-Frame-Options", value: "deny" },
                    { key: "X-Download-Options", value: "noopen" },
                    { key: "X-Content-Type-Options", value: "nosniff" },
                    { key: "X-XSS-Protection", value: "1" },
                    {
                        key: "Referrer-Policy",
                        value: "strict-origin-when-cross-origin",
                    },
                ],
            },
        ];
    },
};
