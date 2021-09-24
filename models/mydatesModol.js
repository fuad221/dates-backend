const mongoose = require('mongoose');

const mydatesSchema = {
    date: Date,
    whitHow: String,
    happend: String

}

module.exports = mongoose.model("myDates", mydatesSchema)


/* i don't need this to part to make the code. 
const mydates = mongoose.model("myDates", mydatesSchema)
module.exports = mydates;
*/