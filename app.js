"use strict"

const redis = require('redis');
const express = require('express')
let app = express();

let redisClient = redis.createClient({host: process.env.REDIS_URI});

app.get("/in", (req, res) => {
  redisClient.incr("counter", (err, val) => {
    res.status(200).send({"count": val});
  });
  
});

app.listen(3000, () =>
{
  console.log("Listening");
});
