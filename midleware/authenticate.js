const jwt = require('jsonwebtoken');


/**
 * Authentication Midleware
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
async function authenticateUser(req,res,next) {
    if(req.path == '/login' || req.path == '/'){
        return next();
    }
    const header = req.headers['authorization'];
    const token = header && header.split(' ')[1];

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) {
            return res.send({ message: 'Invalid or expired token' });
        }
        req.userparam = user; 
        next();
    });
}

module.exports = authenticateUser
