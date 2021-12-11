require('dotenv').config()
require('express-async-errors')

const express = require("express");
const app = express();
const productRouter = require("./routes/routeProduct");

//const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});

//const stripeController = require("./controllers/stripeCont")

const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler');

const port = process.env.port || 3000

app
    .use(express.json())
    .use(express.static("./public"))
    //.use(fileUpload({ useTempFiles: true }))

    .use("/api/v1/products", productRouter)
    //.post('/stripe', stripeController)

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