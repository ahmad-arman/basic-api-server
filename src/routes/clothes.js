'use strict';

const express = require('express');

const ClothesCon = require('../models/food');
const myClothes = new ClothesCon();//object
const router = express.Router();

router.get('/', getMyClothes);
router.get('/:id', getOneClothesWithId);
router.post('/', createClothes);
router.put('/:id', updateClothes);
router.delete('/:id', deleteClothes);

// controller
function deleteClothes(req, res) {
    const resObj = myClothes.delete(req.params.id);
    res.json(resObj);
}

function updateClothes(req, res) {
    const personObj = req.body;
    const resObj = myClothes.update(req.params.id, personObj);
    res.json(resObj);
}

function createClothes(req, res) {
    const personObj = req.body;
    const resObj = myClothes.create(personObj);
    res.status(201).json(resObj);
}

function getMyClothes(req, res) {
    const resObj = myClothes.read();
    res.json(resObj);
}

function getOneClothesWithId(req, res) {
    const resObj = myClothes.read(req.params.id);
    res.json(resObj);
}

module.exports = router;