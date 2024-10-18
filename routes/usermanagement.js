const usermanagement = require("../models/usermanagement")
const validate = require('../joi/validation')
const message = require("../common/errors")

module.exports = (app) => {

   
    /**
     * save user management in collection
     * @param {*} req 
     * @param {*} res 
     */
    const userManagement = async (req, res) => {
        try {
            const { firstName, lastName, emailId, phone } = req.body;

            const { error, value } = validate.userInfo.validate(req.body);

            console.log(value)

            if (error) {
                return res.send({ 
                    status : message.statusCode.invalid,
                    message: error.details[0].message 
                });
            }

            let user =  new usermanagement({ firstName, lastName, emailId, phone });
            let saveResp = await user.save();

            if(!saveResp){
                return res.send({
                    message : message.success.message,
                    status : message.statusCode.success,
                    data : user
                })
            }

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
                function : 'userManagement'
            })
        }

    }

    app.post('/users',userManagement)
}