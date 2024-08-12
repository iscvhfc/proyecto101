const express = require('express');
const app = express();

const bodyParser = require('body-parser');
// Para pder usaar variables globales
require('dotenv').config();
// sellama a la coneccion Mongoose para conectar con MongoDB
require('./database/mongodb');
// llando a las rutas del modelo
require('./modelos/categorias');
require('./modelos/producto');
require('./modelos/ProductoFoto');


// Middlewares para bodyParser parsear JSON
 app.use(bodyParser.urlencoded({ extended: false })); // Para parsear form-urlencoded
 app.use(bodyParser.json());

 // archivos estaticos del proyecto
 app.use(express.static('__dirname + "/public"')); // __dirname para obtener el directorio actual y subir archivos a la api 

 // Rutas registros
app.use('/', require('./rutas/rutas'));

 //personañizando el 404
app.use(function(req, res) {

    res.status(404).json({
        message: 'Error 404 - No se encontró la ruta o pagina en la API.'
    });
});

 app.listen(process.env.PORT, () => {
    console.log(`Trabajando en nuestra API...`);
});



