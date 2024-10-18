const usermanagement = require("../models/usermanagement")
const message = require("../common/errors")

module.exports = (app) => {

    /**
     * gets users by id
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    const getUserInformation = async (req, res) => {
        try {

            let allUsers = await usermanagement.find({}).exec();

            if(!allUsers.length) return res.send({
                message : message.success.message,
                status : message.statusCode.success,
                data : allUsers
            });

            return res.send({
                message : message.success.message,
                status : message.statusCode.success,
                data : allUsers
            })
            

        } catch (error) {
            console.error(error, 'getUserInformation')
            return res.send({
                message : message.success.message,
                status : message.statusCode.exception,
                error : error.message,
                function : 'getUserInformation'
            })
        }
}

    app.get('/users',getUserInformation)
}