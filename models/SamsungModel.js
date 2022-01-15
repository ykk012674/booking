const mongoose = require("mongoose");

const samsungModelSchema = new mongoose.Schema({
    company: { type: String, required: true },
    modelNo: { type: String, required: true },
    color: { type: String, required: true },
    memory: { type: String, required: true },
    price : { type: Number, required: true }
});

//module.exports = mongoose.model("gasmodel", samsungModelSchema, "gasmodel");
module.exports = mongoose.model("devices", samsungModelSchema, "devices");
