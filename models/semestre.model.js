const mongoose = require("mongoose");
const { Schema } = mongoose;

const semestreSchema = new Schema({
  nivel: {
    materia: String, //POO
    credito: Number, //543-dfs
    codigo: Number, //2424
  },
});

module.exports = mongoose.model("semestre", semestreSchema);
