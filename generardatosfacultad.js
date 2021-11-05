const mongoose = require("mongoose");
const { Universidad } = require("./models");

const { MONGO_URI } = require("./config");

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
let Universidadnew = [
  {
    nombre: "Facultad Ciencias Informaticas", //FACCI
    ubicacion: {
      tipo: "Matriz", //MAtriz o Extesion
      direccion: "Manta", //MAnta o Chone
    },
    carrera: {
      Nombre: "Tecnologias de la Informacion", //TI SF SI
      puntaje: 777, // 789,834
    },
    fecha_fundacion: "8-7-2018", //2004 o 2018
  },
];
console.log(Universidadnew);
async function generrarPizza(s) {
  Universidad.create(s);
}
async function main() {
  try {
    await generrarPizza(Universidadnew);
  } catch (err) {
    console.log(err);
  }
}
main();
