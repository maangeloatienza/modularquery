'use strict';

module.exports = (config) => {
    config = config || {};

    return (req, res, next) => {
        let allowed = false;

        if (config.allowed_origins_list) {

            if (!Array.isArray(config.allowed_origins_list)) {
                throw new Error('allowed_origins_list needs to be an Array');
            }

            config.allowed_origins_list.some((a) => {
                if (req.headers.origin && req.headers.origin.match(a)) {
                    res.setHeader('Access-Control-Allow-Credentials', !!config.allow_credentials);
                    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
                    allowed = true;
                    return true;
                }
            });
        }

        if (!allowed && config.allowed_origins) {
            res.setHeader('Access-Control-Allow-Origin', config.allowed_origins);
        }

        if (config.allowed_methods) {
            res.setHeader('Access-Control-Allow-Methods', config.allowed_methods);
        }

        if (config.allowed_headers) {
            res.setHeader('Access-Control-Allow-Headers', config.allowed_headers);
        }

        if (req.method === 'OPTIONS') {
            return res.send();
        }

        next();
    };
};
