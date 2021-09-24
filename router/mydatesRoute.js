const express = require("express")
const router = express.Router();
const mydates = require('../controllers/mydatescontroller')

const { addmydates, getmydates, getmydate } = require('../controllers/mydatescontroller')

router.
    route('/')
    .get(getmydates)
    .post(addmydates)

router
    .route('/:id')
    .get(getmydate)





// router.route("/mydates").get((req, res) => {
//     mydates.find()
//     .then(foundmydayte => res.json(foundmydayte) )
// })

module.exports = router;



//the 
// router.route("/create").post((req, res) => {
//     const data = req.body.data;
//     const whitHow = req.body.whitHow;
//     const happend = req.body.happend;
//     const mydates = await mydates.create(req.body)


//     const newDate = new mydates({
//         data,
//         whitHow,
//         happend
//     })

//     newDate.save()

// })