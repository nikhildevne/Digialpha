const express = require('express');
let app = express();
let cors = require('cors')
let mongoose = require('mongoose')
require('dotenv').config()
const authenticateUser = require('./midleware/authenticate')

mongoose.connect(process.env.MONGODB_STRING, {

})

app.use(express.json())
app.use(cors())

app.use(authenticateUser)

app.listen(process.env.PORT,()=>{
    console.log('working port',process.env.PORT)
})

app.get('/',(req,res)=>{
    res.send(`
        <h1>Hello .....</h1>
        <h2>Please Use Postman To Test Other APIs...<h2>
    `)
})

require('./routes/getUsers')(app)
require('./routes/getUser')(app)
require('./routes/usermanagement')(app)
require('./routes/updateUser')(app)
require('./routes/deleteUser')(app)
require('./routes/createUserRole')(app)
require('./routes/login')(app)


