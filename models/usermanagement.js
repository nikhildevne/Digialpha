let mongoose = require('mongoose')
// First Name, Last Name, Email, Phone
let usersSchema = mongoose.Schema({
    firstName:{
        type : String,
        require : true
    },
    lastName:{
        type: String,
        require : true
    },
    emailId:{
        type: String,
        require : true
    },
    phone:{
        type: String,
        require: true
    },
    password : {
        type: String,
        require : true
    },
    role : {
        type: String,
        require : true
    },
    createAt:{
        type: Date,
        require: true,
        default: new Date()
    }
})

const userschema = mongoose.model('usermanagement',usersSchema);

module.exports = userschema
