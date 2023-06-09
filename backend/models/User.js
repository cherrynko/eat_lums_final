const mongoose = require("mongoose")
const {Schema} = mongoose;

const UserSchema = new Schema({
    id:
    {
        type: Number,
        required:true
    },
    name:
    {
        type: String,
        required:true
    },
    contact:
    {
        type: Number,
        required: true
    },
    email:
    {
        type:String,
        required:true 
        // this is because some masters grads may have alternate emails and ids
    },
    password:
    {
        type:String,
        required:true
    },
    reports:{
        type: Number,
        default:0
    }

})

module.exports = mongoose.model('User', UserSchema);


