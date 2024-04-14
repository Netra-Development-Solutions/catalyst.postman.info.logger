const { successResponse, errorResponse } = require('../../utils/response');
const LogInfo = require('../../models/LogInfo');

const newLogInfo = async (req, res) => {
    try {
        const { logType, logMessage, logDetails, logLevel, logSource, logEnv, logApp, transactionId } = req.body;
        console.log(req.body);
        if (!logType || !logLevel || !logSource || !logEnv || !logApp || (!logMessage && !logDetails)) {
            return errorResponse(res, 'Missing required fields');
        }

        const logInfo = new LogInfo({
            logType,
            logMessage,
            logDetails,
            logLevel,
            logSource,
            logUser: req.user._id,
            logEnv,
            logApp,
            transactionId
        });
        await logInfo.save();
        return successResponse(res, logInfo);
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

module.exports = {
    newLogInfo
};