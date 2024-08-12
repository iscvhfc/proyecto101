const mongoose = require("mongoose");
const { Schema } = mongoose;
var ProductoSchema = new Schema(
  {
    //Agregando relaciones
    //Relacion categoria productos, estan en un agregacion con la categoria
    categoria_id: {
      type: Schema.Types.ObjectId,
      ref: "Categoria",
    },

    nombre: String,
    descripcion: String,
    precio: Number,
  },
  {
    timestamps: false,
    versionKey: false, // To prevent versionKey generation in MongoDB
  }
);

module.exports = mongoose.model("Producto", ProductoSchema);
