var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var port = process.env.PORT || 3525;

// Convierte una petición recibida (POST-GET...) a objeto JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.status(200).json({
    _id: "algo",
    index: "algito",
    guid: "sasdas",
    isActive: true,
    balance: "2,2",
    picture: "http://placehold.it/32x32",
    age: 30,
    eyeColor: "blue",
    name: "pablo moraga",
  });
});

app.listen(port, function () {
  console.log(`Server running in http://localhost:${port}`);
  console.log("Defined routes:");
  console.log("	[GET] http://localhost:3525/");
});
