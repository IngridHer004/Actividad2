const mongoose = require('mongoose')

const url_bd = 'mongodb://localhost:27017/Empresa6'

mongoose.connect(url_bd)

.then(() => {
    console.log("Funciona")
})
.catch((err) => {
    console.log("No funciono")
})

const Esquema_Empresa = new mongoose.Schema({
    name:{ type: String},
    puesto:{ type: String},
    feNac:{ type: Date},
    salario:{ type: Number},
    telefono:{ type: Number},
    correo:{ type: String},
    edad:{ type: Number}
})

const Modelo_Empresa = new mongoose.model('Empleados',Esquema_Empresa) 

Modelo_Empresa.create({
    name: "Juanito Alcachofa",
    puesto: "Gerente",
    feNac: new Date ("06/12/2000"),
    salario: 13000,
    telefono: 4491234567,
    correo: "JuanitoAlcachofa@gmail.com",
    edad: 24
})
