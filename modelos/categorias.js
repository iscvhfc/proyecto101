const mongoose = require("mongoose");
const { Schema } = mongoose;
var CategoriaSchema = new Schema({
  nombre: String,
  descripcion: String,
},
  { timestamps: false,
    versionKey: false, // To prevent versionKey generation in MongoDB
  });

module.exports = mongoose.model("Categoria", CategoriaSchema);
