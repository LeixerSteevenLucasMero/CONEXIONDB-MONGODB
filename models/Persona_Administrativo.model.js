const mongoose = require("mongoose");
const { Schema } = mongoose;

const Persona_AdministrativoSchema = new Schema({
  nombre: String, //don dima
  facultad: String, // facci
  Cargo: String, //Conserge
  hoja_vida: String, // link
});

module.exports = mongoose.model(
  "Persona_Administrativo",
  Persona_AdministrativoSchema
);
