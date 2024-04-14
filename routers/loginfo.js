const { newLogInfo } = require("../services/loginfo");

const routesConfig = [
    {
        method: 'post',
        path: '/add',
        controller: newLogInfo,
        middlewares: [],
        description: 'Add new log into the system',
        isTokenRequired: true
    }
];

module.exports = routesConfig;