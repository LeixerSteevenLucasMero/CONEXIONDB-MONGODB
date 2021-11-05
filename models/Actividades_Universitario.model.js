const mongoose = require("mongoose");
const { Schema } = mongoose;

const Actividades_UniversitarioSchema = new Schema({
  Nombre: String, //Dias de los muertos
  fecha: Date, //1 de nom
  descripcion: String, //se toma colada morada
});

module.exports = mongoose.model(
  "Actividades_Universitario",
  Actividades_UniversitarioSchema
);
