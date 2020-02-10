const mongoose = require('mongoose');

const harmony = new mongoose.Schema({
    taskName: {
        type: String,
    },
    taskTime: {
        type: Date,
    },
    priority: {
        type: String,
        enum: ["High", "Medium","Low"],
    },
    assignedProjectName: {
        default: "None",
        type: String,
    },
    taskCompleted: {
        type: Boolean,
    },
    taskOverDue: {
        type: Boolean,
        default: "false",
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
});

const harmonyModel = mongoose.model('Harmony', harmony);

module.exports = harmonyModel;