const mongoose = require("mongoose");
const { Persona_Administrativo } = require("./models");

const { MONGO_URI } = require("./config");

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  let Universidadnew = [
    {
      personall: {
        nombre: "Muñoz Verduga Dolores Esperanza", //decana
        cedula:"1306796366",
        facultad: "Facultad de Ciencias Informáticas", //facci
        Cargo: "Decana", //
        Datos: "https://carreras.uleam.edu.ec/facci/wp-content/uploads/sites/26/2016/06/Hoja-de-Vida-Dolores-Mu%c2%a6oz.pdf",
      },
      personall: {
        nombre: "Solorzano Cadena Ruben Dario", //decana
        cedula:"1306297159",
        facultad: "Facultad de Ciencias Informáticas", //facci
        Cargo: "Director de Carrera", //
        Datos: "https://carreras.uleam.edu.ec/facci/wp-content/uploads/sites/26/2019/02/Ing.-R%c3%baben-Solorzano.pdf",
      },
      personall: {
        nombre: "Ayovi Ramirez Marco Wellington", //decana
        cedula:"0800631152",
        facultad: "Facultad de Ciencias Informáticas", //facci
        Cargo: "Docente Universitario", //
        Datos: "https://carreras.uleam.edu.ec/facci/wp-content/uploads/sites/26/2019/02/Ing.-Marcos-Ayov%c3%ad.pdf",
      },
      personall: {
        nombre: "Vera Navarrate Denise Soroya", //decana
        cedula:"1308400249",
        facultad: "Facultad de Ciencias Informáticas", //facci
        Cargo: "Secretaria", //
        Datos: "https://carreras.uleam.edu.ec/facci/wp-content/uploads/sites/26/2018/05/ING.-VERA-NAVARRETE-DENISE.pdf",
      },

    },
  ];


  console.log(Universidadnew);
async function generrarPizza(s) {
    Persona_Administrativo.create(s);
}
async function main() {
  try {
    await generrarPizza(Universidadnew);
  } catch (err) {
    console.log(err);
  }
}
main();
