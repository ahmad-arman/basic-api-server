'use strict';



const { server } = require('../src/server.js');
const superTest = require('supertest');
const request = superTest(server);


describe('Server Module', ()=> {
    it(' should return 404 on a bad route', async ()=> {

        let response = await request.get('/any-rout-not-found');
        expect(response.status).toEqual(404);

    });
    it(' should  return 404 on a bad method', async ()=> {

        let response = await request.delete('/api/v1/food');
        expect(response.status).toEqual(404);

    });

    
});

describe('server', () => {
    let id;
    it('should create a new food using post request', async () => {
        //arrange
        let food = {
            name: 'meats',
            role: 'romani'
        }
        //act
        const response = await request.post('/api/v1/food').send(food);
        //assert
        expect(response.status).toEqual(201);
        expect(response.body.data.name).toEqual('meats');
        expect(response.body.data.role).toEqual('romani');
        expect(response.body.id.length).toBeGreaterThan(0);

        id = response.body.id;
    });

   

   

    it('should read all food using get request', async () => {

       
        //arrange
        let food = {
            name: 'meats',
            role: 'romani'
        }
        //act
        const response = await request.get('/api/v1/food').send(food);
        //assert
        
        expect(response.status).toEqual(200);
        expect(response.body[0].data.name).toEqual('meats');
        expect(response.body[0].data.role).toEqual('romani');
        expect(response.body[0].id.length).toBeGreaterThan(0);

        // id = response.body.id;
    });

    it('should read  food using get request', async () => {

       
        //arrange
        let food = {
            name: 'meats',
            role: 'romani'
        }
        //act
        const response = await request.get(`/api/v1/food/${id}`).send(food);
        //assert
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',response.body);
        expect(response.status).toEqual(200);
        expect(response.body.data.name).toEqual('meats');
        expect(response.body.data.role).toEqual('romani');
        expect(response.body.id.length).toBeGreaterThan(0);

        // id = response.body.id;
    });


    it('should update a food using put request', async () => {
        //arrange
        let editFood = {
            name: 'meats',
            role: 'romani'
        };
        //act
        const response = await request.put(`/api/v1/food/${id}`)
            .send(editFood);
        //asert
        expect(response.status).toEqual(200);
        expect(response.body.data.role).toEqual('romani');
    });

    it('should delete a food using delete request', async () => {

        //arrange
        let editFood = {
            name: 'meats',
            role: 'romani'
        };
        //act
        const response = await request.delete(`/api/v1/food/${id}`)
            .send(editFood);
        //asert
        console.log(response.body.data);
        expect(response.status).toEqual(200);
        expect(response.body.data).toEqual(undefined);
    });
});

describe('Clothes api server', () => {
    let id;
    it('should create a new clothes using post request', async () => {
        //arrange
        let myClothes = {
            type: 'jacket',
            color: 'red'
        }
        //act
        const response = await request.post('/api/v1/clothes').send(myClothes);
        //assert
        expect(response.status).toEqual(201);
        expect(response.body.data.type).toEqual('jacket');
        expect(response.body.data.color).toEqual('red');
        expect(response.body.id.length).toBeGreaterThan(0);
        id = response.body.id;
    });
    it('should read all clothes using get request', async () => {
        //arrange
        let myClothes = {
            type: 'jacket',
            color: 'red'
        }
        //act
        const response = await request.get('/api/v1/clothes').send(myClothes);
        //assert
        console.log('Body: ', response.body);
        expect(response.status).toEqual(200);
        expect(response.body[0].data.type).toEqual('jacket');
        expect(response.body[0].data.color).toEqual('red');
        expect(response.body[0].id.length).toBeGreaterThan(0);
    });
    it('should read clothes with id using get request', async () => {
        //arrange
        let myClothes = {
            type: 'jacket',
            color: 'red'
        }
        //act
        const response = await request.get(`/api/v1/clothes/${id}`).send(myClothes);
        //assert
        console.log('Body: ', response.body);
        expect(response.status).toEqual(200);
        expect(response.body.data.type).toEqual('jacket');
        expect(response.body.data.color).toEqual('red');
        expect(response.body.id.length).toBeGreaterThan(0);
    });
    it('should update clothes using put request', async () => {
        //arrange
        let myClothes = {
            type: 'jacket',
            color: 'red'
        };
        //act
        const response = await request.put(`/api/v1/clothes/${id}`)
            .send(myClothes);
        //asert
        expect(response.status).toEqual(200);
        expect(response.body.data.color).toEqual('red');
    });
    it('should delete clothes with id using delete request', async () => {
        //arrange
        let clothesDel = {
            type: 'jacket',
            color: 'red'
        };
        //act
        const response = await request.delete(`/api/v1/clothes/${id}`)
            .send(clothesDel);
        //asert
        expect(response.status).toEqual(200);
        expect(response.body).toEqual([ ]);
    });
});