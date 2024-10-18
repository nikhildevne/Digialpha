let mongoose = require('mongoose')
let userroles = mongoose.Schema({
    role:{
        type : String,
        require : true
    },
    createAt:{
        type: Date,
        require: true,
        default: new Date()
    }
})
const userrole = mongoose.model('userrole',userroles);

module.exports = userrole