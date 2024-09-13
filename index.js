const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const engines = require('consolidate');
app.engine('html', engines.mustache);

app.use(express.static("../public"));
app.set('views','../public/views')
app.set("view engine", "html");

const serviceSheets = require("./FunctionSheets")
const createObj = require("./CreateObj");
const cons = require("consolidate");

app.listen(3001, () => {
    console.log("Server on");
});

app.get("/home", async (req, res) => {

    const getData = await serviceSheets.getRouts()

    const dados = await createObj(getData)

    res.json(dados)
    



});




