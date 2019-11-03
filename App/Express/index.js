const fs = require('fs');
const FILE_NAME = 'airport.json';
const express = require('express')
const mongoClient = require('mongodb').MongoClient
var db;
var app = express()
mongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) throw err;
    db = client.db('mydb');
})


app.get("/insert", (req, res) => {

    fs.readFile(FILE_NAME, (error, data) => {
        console.log('Read: starting...');

        if (error) {
            console.log('Read: NOT successful!');
            console.log(error);
        } else {
            try {
                const dataJson = JSON.parse(data);
                console.log('Read: successful!');
                console.log(dataJson);
                db.collection('airports').insert(dataJson.airports, (err, result) => {
                    if (err) throw err;
                    return res.send("inserted" + result);
                })
            } catch (error) {
                console.log(error);
            }
        }

    });
})


app.get("/cities", (req, res) => {
    db.collection('airports').distinct('city_name', (err, result) => {
        if (err) throw err;
        res.json(result);
    })
})

app.get("/airports/:cities", (req, res) => {
    db.collection('airports').find({ "city_name": req.params.cities }).toArray((err, result) => {
        if (err) throw err;
        res.json(result);
    })
})

app.listen(4000);

