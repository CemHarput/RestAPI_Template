const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    subs:{
        type:String,
        required:true
    },
    register_Date:{
        type:Date,
        required:true,
        default:Date.now

    }
})
module.exports = mongoose.model('User',userSchema)