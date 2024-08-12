const mongoose = require("mongoose");
const { Schema } = mongoose;
var FormularioSchema = new Schema({
    "Marca temporal": String,
    "Correo electrónico Institucional del Sujeto Obligado (Unidad de Transparencia)": String,
    "SUJETO OBLIGADO": String,
    "ÁREA GENERADORA DE LA INFORMACIÓN": String,
    "NOMBRE DEL SERVIDOR PUBLICO DEL ÁREA GENERADORA DE LA INFORMACIÓN Y RESPONSABLE DE LA CARGA": {
      // Aquí debes definir las propiedades del objeto, por ejemplo:
      "nombre": String,
      "apellido": String
    },
    "CARGO": String,
    "CORREO ELECTRÓNICO OFICIAL DEL ÁREA DE LA CARGA DE INFORMACIÓN": String,
    "CORREO ELECTRÓNICO PERSONAL PARA OIR Y RECIBIR NOTIFICACIONES": String,
    "TELEFONO PARTICULAR": String,
    "ADJUNTAR DOCUMENTOS DEL RESPONSABLE DE LA CARGA DE INFORMACIÓN EN FORMATO PDF": String,
    "ART": {
      "69-FORMATOS RESPONSABLE DE CARGAR [ART69]": String,
      "70I-FORMATOS RESPONSABLE DE CARGAR [Art 70-I]": String,
      "70II-FORMATOS RESPONSABLE DE CARGAR [Art 70-II]": String,
    },
    "AVISO DE PRIVACIDAD": String,
  }, {
    timestamps: false,
    versionKey: false // Para evitar la generación de versionKey en MongoDB
  });

module.exports = mongoose.model("formulario", FormularioSchema);