const mongoose = require("mongoose");
const { Schema } = mongoose;

const universidadSchema = new Schema({
  nombre: String, //FACCI
  ubicacion: {
    tipo: String, //MAtriz o Extesion
    direccion: String, //MAnta o Chone
  },
  carrera: {
    Nombre: String, //TI SF SI
    puntaje: Number, // 789,834
  },
  fecha_fundacion: Date, //2004 o 2018
});

module.exports = mongoose.model("Universidad", universidadSchema);
