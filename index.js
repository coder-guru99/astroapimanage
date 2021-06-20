// const express = require("express");
import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import { Database } from "./database.js";
import { daily_horoscope_URL } from "./apiConstant.js";
import fetch from "node-fetch";
import { daily_horoscope_route } from "./utils/urls.js";
const App = express();
App.use(bodyParser.urlencoded({ extended: false }));
App.use(bodyParser.json());
// Database();
//JSON Imports
// import mantra from "./utils/Mantra.json";
let mantraData = JSON.parse(fs.readFileSync('./utils/Mantra.json', 'utf-8'))
const productData = [
    {
        id: 1234,
        name: 'Product1',
        description: 'New item',
        cost: 'Rs.200'
    }
]
const returnData = [
    {
        name: "Gurunath",
        value: "He loves pooja kuchi"
    }
]

App.get("/hello", (req, res) => {
    res.send("Hello world");
});

App.get("/json", (req, res) => {
    res.json(returnData);
    res.end();
});

App.post("/json", (req, res) => {
    console.log(req.body);
    const body = req.body || {};
    if (body.name && body.value) {
        returnData.push(body);
    }
    res.json(returnData);
    res.end();
});

App.get("/product", (req, res) => {
    res.send(productData);
});

App.get(daily_horoscope_route, (req, res) => {
    // to get the data from query params
    console.log("URLPARMA", req.query);
    const {
        type = "today",
        sign
    } = req.query
    if (sign) {

        const url = `${daily_horoscope_URL}${type}/${sign}`;
        fetch(url, {
            "method": "GET"
        })
            .then(res => res.json())
            .then(json => {
                console.log(json);
                res.json(json || {});
                res.end();
              })
            .catch(err => {
                res.json({
                    message: "Error in server",
                    status_code: 400
                });
                res.end();
            });
    } else {
        res.json({
            message: "Please provide sign name as sign = `name of the sign`",
            status_code: 401
        });
        res.end();
    }

})

App.get("/mantra", (req, res) => {
    res.json(mantraData);
});


const PORT = process.env.PORT || 3001;
App.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});