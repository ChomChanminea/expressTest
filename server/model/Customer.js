const mongoose = require('mongoose');
const SchemaTypes = mongoose.Schema.Types;
const Schema = mongoose.Schema;



const customerSchema = new Schema({
    name: {
        type: String,
        require: [true, "Please Enter Customer name"]
    },
    Date: {
        type: Date,
        default: Date.now
    },
    Service: {
        type: String,
        require: [true, "Please Enter Service type"]
    },
    Expire: {
        type: String,
    }


}, { timestapmps: true });

module.exports = mongoose.model('Customer', customerSchema);