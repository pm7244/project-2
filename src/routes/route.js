const express = require('express');
const router = express.Router();

const collagecontroller = require('../controllers/collageController')
const interncontroller = require('../controllers/InternController')


// =======================Post(/functionup/colleges)=================================//
router.post("/functionup/colleges", collagecontroller.createcollege)


// =======================post(/functionup/interns)==================================//
router.post("/functionup/interns", interncontroller.createintern)


// =======================get(/functionup/collegeDetails)=============================//
router.get("/functionup/collegeDetails" , collagecontroller.Getcollegedetail)


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

module.exports = router;