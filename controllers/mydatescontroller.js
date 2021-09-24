const mydates = require('../models/mydatesModol')
const createError = require("http-errors");



//get all 
exports.getmydates = async (req, res, next) => {
  try {
    const data = await mydates.find().exec();
    res.status(200).send(data)
  } catch (e) {
    next(e);
  }
}



exports.getmydate = async (req, res, next) => {
  try {
    const data = await mydates.findById(req.params.id).populate('data');
    if (!data) throw new createError.NotFound();
    res.status(200).send(data);
  } catch (e) {
    next(e);
  }
};



exports.addmydates = async (req, res, next) => {
  try {
    const myDates = new mydates(req.body);
    await myDates.save();
    res.status(200).send(myDates);
  } catch (e) {
    next(e);
  }
};






// exports.getMydates = async (req, res, next) => {
//   try {
//     const mydates = await myDates.findbyId(req.params.id).exec();
//     if (!mydates) {
//       // throw new createError.NotFound()
//       res.status(500).send({message: "recored not found"})
//     };
//     res.status(200).send(mydates);

//   } catch (e) {
//     res.status(500).send({message: "recored not found"})
//     next(e);
//   }
// };






