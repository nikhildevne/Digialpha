const roleSchema = require("../models/userroles")
const validate = require('../joi/validation')
const message = require("../common/errors")

module.exports = (app) => {

   
    /**
     * save user Role in collection
     * @param {*} req 
     * @param {*} res 
     */
    const userRole = async (req, res) => {
        try {
            const { role } = req.body;

            const { error, value } = validate.userRole.validate(req.body);

            console.log(value)

            if (error) {
                return res.send({ 
                    status : message.statusCode.invalid,
                    message: error.details[0].message 
                });
            }

            let roleSave =  new roleSchema({ role });
            let saveResp = await roleSave.save();

            if(!saveResp){
                return res.send({
                    message : message.success.message,
                    status : message.statusCode.success,
                    data : saveResp
                })
            }

            return res.send({
                message : message.saveRole.message,
                status : message.statusCode.success,
                data : saveResp
            })

        } catch (error) {
            console.error(error)
            return res.send({
                message : message.catchedError.message,
                status : message.statusCode.exception,
                error : error.message,
                function : 'userRole'
            })
        }

    }

    app.post('/userRole',userRole)
}