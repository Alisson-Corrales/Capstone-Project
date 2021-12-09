require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()

const stripeController = require("./controllers/stripeCont")

const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler');
const fileUpload = require('express-fileupload');

const port = process.env.port || 3000

app
    .use(express.json())
    .use(express.static("./public"))

    .post('/stripe', stripeController)

    //.get('/', (req, res) => {
    //    res.send("<h1> File Upload Starter </h1>")
    //})

    .use(notFound)
    //.use(errorHandlerMiddleware)

    const start = () => {
        try {
            //await connectDB(process.env.MONGO_URL)
            app.listen(port, console.log(`listening @ ${port}`))
        } catch (err) {
            console.log(err);
        }
    }

start()