const usermanagement = require("../models/usermanagement")
const validate = require('../joi/validation')
const message = require("../common/errors")

module.exports = (app) => {

/**
     * update user 
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
const updateUser = async (req, res) =>{
    try {
        const {id} = req.params;
        const { firstName, lastName, emailId, phone, role } = req.body;

        if(req.body.role && req.userparam && req.userparam.role !== 'Admin') return res.send({
            message : message.roleException.message,
            status : message.statusCode.success,
        })

        // const { error, value } = validate.userInfo.validate(req.body);

        // console.log(value)

        // if (error) {
        //     return res.send({ 
        //         status : message.statusCode.invalid,
        //         message: error.details[0].message 
        //     });
        // }

        let updateResp = await usermanagement.findByIdAndUpdate(id,{ firstName, lastName, emailId, phone, role },{new:true});

        if(!updateResp){
            return res.send({
                message : message.datanotFound.message,
                status : message.statusCode.success,
                data : updateResp
            })
        }

        return res.send({
            message : message.success.message,
            status : message.statusCode.success,
            data : updateResp
        })

    } catch (error) {
        console.error(error)
        return res.send({
            message : message.catchedError.message,
            status : message.statusCode.exception,
            error : error.message,
            function : 'updateUser'
        })
    }
}

app.put('/users/:id',updateUser)
}