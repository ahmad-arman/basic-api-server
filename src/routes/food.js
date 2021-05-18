'use strict';

const express = require('express');

const FoodCon = require('../models/food');
const myFood = new FoodCon();//object
const router = express.Router();

router.get('/', getMyFood);
router.get('/:id', getOneFoodWithId);
router.post('/', createFood);
router.put('/:id', updateFood);
router.delete('/:id', deleteFood);

// controller
function deleteFood(req, res) {
    const resObj = myFood.delete(req.params.id);
    res.json(resObj);
}

function updateFood(req, res) {
    const personObj = req.body;
    const resObj = myFood.update(req.params.id, personObj);
    res.json(resObj);
}

function createFood(req, res) {
    const personObj = req.body;
    const resObj = myFood.create(personObj);
    res.status(201).json(resObj);
}

function getMyFood(req, res) {
    const resObj = myFood.read();
    res.json(resObj);
}

function getOneFoodWithId(req, res) {
    const resObj = myFood.read(req.params.id);
    res.json(resObj);
}

module.exports = router;