const usermanagement = require("../models/usermanagement")
const validate = require('../joi/validation')
const message = require("../common/errors")
const jwt = require('jsonwebtoken');

module.exports = (app) => {

   
    /**
     * save user management in collection
     * @param {*} req 
     * @param {*} res 
     */
    const login = async (req, res) => {
        try {
            
            const { emailId, password } = req.body;

            const { error, value } = validate.login.validate(req.body);

            console.log(value)

            if (error) {
                return res.send({ 
                    status : message.statusCode.invalid,
                    message: error.details[0].message 
                });
            }

            let user =  await usermanagement.findOne({ emailId, password },{password:0}).exec();

            if(!user) return res.send({
                message : message.loginErro.message,
                status : message.statusCode.success
            })

            if(!user.role) return res.send({
                message : message.norole,
                status : message.statusCode.success
            })

            const role  = user.role

            const token = await jwt.sign({ emailId, role }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' })

            return res.send({
                message : message.success.message,
                status : message.statusCode.success,
                data : user,
                token : token
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

    app.post('/login',login)
}