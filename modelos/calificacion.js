const mongoose = require("mongoose");

const { Schema } = mongoose;
var calificacionSchema = new Schema(
  {
    //Agregando relaciones
    
    categoria_id: {
      type: Schema.Types.ObjectId,
      ref: "formulario",
    },

    ID_SUJETO : Number,
    Sujeto: String,
    Calendario: String,
    Etapa : Number,
    Artículo : Number,
    Fracción : Number,
    Calificación : Number,
  },
  {
    timestamps: false,
    versionKey: false, // To prevent versionKey generation in MongoDB
  }
);

module.exports = mongoose.model("Calificacion", calificacionSchema);
