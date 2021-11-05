const mongoose = require("mongoose");
const { semestre } = require("./models");

const { MONGO_URI } = require("./config");

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
let Universidadnew = [
  {
    nivel: {
      materia: "POO", //POO
      credito: 543 - 423, //543-dfs
      codigo: 534, //2424
    },
  },
];
console.log(Universidadnew);
async function generrarPizza(s) {
  semestre.create(s);
}
async function main() {
  try {
    await generrarPizza(Universidadnew);
  } catch (err) {
    console.log(err);
  }
}
main();
