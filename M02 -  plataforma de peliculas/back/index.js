const app = require("./src/services/server");
const dataBase = require("./src/config/database");

    dataBase().then((res) =>{
        app.listen(3000,()=>{
            console.log("Servidor escuchando en el puerto 3000");
        })}).catch((err) => {
    console.log("Error al conectar con la BDD");
        });