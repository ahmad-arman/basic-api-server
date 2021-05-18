'use strict';
const uuid = require('uuid').v4;//random

class FoodCon {
    constructor() {
        this.db = [];
        // [{id:, data: {name, type, ...}}]
    }

    read(id) {
        if (id) {
            return this.db.find((myFood) => myFood.id === id);
        } else {
            return this.db;
        }
    }

    create(obj) {
        const foodData = {
            id: uuid(),
            data: obj,
        };
        this.db.push(foodData);
        return foodData;
    }

    delete(id) {
        console.log(id);

        this.db = this.db.filter((myFood) => myFood.id !== id);
        return this.db;
    }

    update(id, obj) {
        for (let i = 0; i < this.db.length; i++) {
            let p = this.db[i];
            if(p.id === id) {
                this.db[i].data = obj;
                return this.db[i];
            } 
        }
    }
}

module.exports = FoodCon;