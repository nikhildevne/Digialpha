const usermanagement = require("../models/usermanagement")
const message = require("../common/errors")

module.exports = (app) => {

   /**
     * get user by id
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
   const getuser = async (req, res) => {
    try {   
        console.log('#####',req.params)
        let {id} = req.params;
        let user = await usermanagement.findOne({_id:id}).exec();

        if(!user) return res.send({
            message : message.datanotFound.message,
            status : message.statusCode.success,
            data : user
        });

        return res.send({
            message : message.success.message,
            status : message.statusCode.success,
            data : user
        })
        
    } catch (error) {
        console.error(error)
        return res.send({
            message : message.catchedError.message,
            status : message.statusCode.exception,
            error : error.message,
            function : 'getuser'
        })
    }
}

    app.get('/users/:id',getuser)
}