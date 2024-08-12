const mongoose = require('mongoose');

mongoose.connect(process.env.URI_LOCAL).then (() => {
    console.log('Conectado a la base de datos');
}).catch((err) => {
    console.log('Error conectando a la base de datos', + err);
});