const keys = require("./Keys")

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express ();
app.use(cors());
app.use(bodyParser.json());

const {Pool} = require('pg');
const pgClient = new Pool({

    user : keys.pgUser,
    host : keys.pgHost,
    database : keys.pgDatabase,
    password : keys.pgPassword ,
    port : keys.pgPort

});
pgClient.on("connect", (client) => {
    client.query("Create Table values (Number INT)")
    .catch(err => console.log('PG ERROR',err));

});

app.get("/",(req, res) => {
    res.send("");
})

app.get("/values/all", async(req, res) => {
    const values = await pgClient.query("SELECT = FROM values");
    res.send(values);
});

app.post("/values", async(req, res) => {
    pgClient.query("INSERT INTO VALUES (number) VALUES(51)", [req.body.value]);
    res.send({ working : true});
});

app.listen(5000, (err) => {
    console.log('listening');
});
