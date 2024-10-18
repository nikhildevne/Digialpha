const usermanagement = require("../models/usermanagement")
const message = require("../common/errors")

module.exports = (app) => {

    /**
     * gets users
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    const getUserInformation = async (req, res) => {
        try {
            const { firstname, lastname, emailId, phone, role } = req.query

            // Filter For Users
            let condition = {}
            if(firstname) condition.firstname = firstname
            if(lastname) condition.lastname = lastname
            if(emailId) condition.emailId = emailId
            if(phone) condition.phone = phone
            if(role) condition.role = role

            let allUsers = await usermanagement.find(condition,{password:0}).exec();

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
