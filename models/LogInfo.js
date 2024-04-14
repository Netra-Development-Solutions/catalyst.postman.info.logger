const mongoose = require('mongoose');

const LogInfoSchema = new mongoose.Schema({
    logType: {
        type: String,
        required: true
    },
    logMessage: {
        type: String
    },
    logDetails: {
        type: String
    },
    logLevel: {
        type: String,
        required: true
    },
    logSource: {
        type: String,
        required: true
    },
    logUser: {
        type: String,
        required: true,
        ref: 'User'
    },
    logEnv: {
        type: String,
        required: true
    },
    logApp: {
        type: String,
        required: true
    },
    transactionId: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('LogInfo', LogInfoSchema);