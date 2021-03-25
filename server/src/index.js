
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

//imported file
const { useMorgan } = require('./middleware')
const setRoutes = require('./routes')



const app = express()


//middleware
useMorgan(app)
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


//routes
setRoutes(app)

app.get('/', (req, res) => {
    res.status(200).json({
        msg: 'Home'
    })
})

//Error Handling
app.use((req, res, next) => {
    let error = new Error('404 Not Fount')
    error.status = 404
    next(error)
})
app.use((error, req, res, next) => {
    if (error.status === 404) {
        res.status(404).json({
            status: error.status,
            msg: error.message
        })
    }
    res.status(500).json({
        status: 500,
        msg: error.message
    })
})


const MONGO_URI = process.env.DATABASE

mongoose
    .connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server Listen ${process.env.PORT}`)
        })
    })
    .catch(err => {
        console.log(err.message)
    })