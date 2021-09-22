const nextTranslate = require("next-translate");

module.exports = nextTranslate({
    webpack: (config, { isServer }) => {
        if (isServer) {
            require('./scripts/generate-sitemap');
        }

        return config;
    }
})