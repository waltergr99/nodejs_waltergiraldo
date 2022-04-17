const express = require("express");

const app = express();

// Conexion a la Base de Datos

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://walter:walter123@cluster0.2rfwl.mongodb.net/garaje-live-coding"
  )

  .then(() => console.log("CONECTADO A LA BD"));

//Modelo
const Coaster = require("./Models/Coaster.model");
//Abrir el Cors
const cors = require("cors");
app.use(cors());

//Enrutar
app.get("/api/coasters", (req, res) => {
  Coaster.find().then((allCoasters) => res.json(allCoasters));
});

app.get("/api/details/:coaster_id", (req, res) => {
  const { coaster_id } = req.params;

  Coaster.findById(coaster_id).then((coaster) => res.json(coaster));
});
app.listen(5005, () => console.log("Servidor levantado"));
