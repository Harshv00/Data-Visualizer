const { model } = require('mongoose');
const Model = require('../models/productModel');
const router =require('express').Router();

router.post('/add', (req, res) => {
    //Reading client data from request body
    console.log(req.body);
    //res.send('response from user router');

    //Create operation
    new Model(req.body).save()
    .then((result) => {
        console.log(result);
        console.log('data saved');
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.json(err);
    });

})
router.get('/getall', (req, res) => {
    Model.find({})
    .then((result) => {
        console.log(result);
        res.json(result);        
    }).catch((err) => {
        console.error(err);
        res.json(err);
    });
    //res.send('get all from user router')
})

router.get('/getbyid/:userid', (req, res) => {
    
    Model.findById(req.params.userid)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.json(err);
    });
})

router.delete('/delete/:userid', (req, res) => {
    
    Model.findByIdAndDelete(req.params.userid)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.json(err);
    });
})

router.put('/update/:userid', (req, res) => {
    Model.findByIdAndUpdate(req.params.userid, req.body, {new : true})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.json(err);
    });
})


module.exports = router;