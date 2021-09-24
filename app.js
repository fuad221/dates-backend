const express = require('express')
const path = require('path');
const app = express()
const cors = require('cors');
const mongoose = require('mongoose')
const mydatesRouter = require('./router/mydatesRoute')

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }));


// connect to mongoose
mongoose.connect("mongodb+srv://fuadMyDates:963qq963@cluster0.fs4fq.mongodb.net/mydates")

// require router
// app.use('/', require('./router/mydatesRoute'))
app.use("/mydates", mydatesRouter) // one for one


app.listen(3001, function () {
    console.log("express server is runnig on port 3001 ")
})






//Setup Error Handlers
const errorHandlers = require("./handlers/errorHandlers");
app.use(errorHandlers.notFound);
app.use(errorHandlers.mongoseErrors);
if (process.env.ENV === "DEVELOPMENT") {
    app.use(errorHandlers.developmentErrors);
} else {
    app.use(errorHandlers.productionErrors);
}


module.exports = app;