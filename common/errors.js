const datanotFound = {
    message : "data not found"
}

const catchedError = {
    message : 'error found in exception'
}

const success = {
    message : 'success'
}

const updateFail = {
    message : 'not updated'
}

const updateSuccess = {
    message : 'data updated'
}

const deleteUser = {
    message : 'user deleted successfuly'
}

const saveRole = {
    message : 'Role Added Successfuly'
}

const statusCode = {
    success : 200,
    exception : 400,
    invalid : 400,

}

const roleException = {
    message : 'you are not authorized to update role'
}

const norole = 'Role is not assigned to you, please contact admin'

const loginErro = {
    message : 'invalid username or password'
}

const tokenException = {
    message : 'JWT token Exception'
}

module.exports = {
    datanotFound,
    catchedError,
    success,
    updateFail,
    updateSuccess,
    deleteUser,
    statusCode,
    saveRole,
    roleException,
    loginErro,
    norole,
    tokenException
};