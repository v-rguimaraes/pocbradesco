const express = require("express");
const app = express();

const azure = require('azure-storage');
const bodyParser = require('body-parser');
const cors = require('cors')
const e = require("express");

const sql = require("mssql")

app.use(express.static(__dirname + '/static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())


app.get("/", (request, response) => {
    response.send("Bem vindo a API na VM");
});

app.get("/api", (request, response) => {
    response.send("Bem vindo a API 1");
   
});

const listener = app.listen(80, () => {
    console.log("Rodando na Porta " + listener.address().port);
});