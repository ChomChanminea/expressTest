const mongoose = require('mongoose');
require('mongoose-double')('mongoose');
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
    },
    ExpirationPeriod: { type: String },
    Payment: SchemaTypes.Decimal128,
    Total: SchemaTypes.Decimal128

});