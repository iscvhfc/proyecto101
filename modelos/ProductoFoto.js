const mongoose = require("mongoose");
const { Schema } = mongoose;
var ProductoFotSchema = new Schema(
  {
    producto_id: { 
      type: Schema.Types.ObjectId, 
      ref: "Producto" 
    },
    nombre: { 
      type: String 
    },
  },

  {
    timestamps: false,
    versionKey: false, // To prevent versionKey generation in MongoDB
  }
);

module.exports = mongoose.model("ProductoFoto", ProductoFotSchema);
