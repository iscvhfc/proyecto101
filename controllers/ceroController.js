const Joi = require("@hapi/joi");
exports.getMetodoCero = (req, res) => {
  return res.json({
    mensaje: "Estás en el método cero accion GET",
  });
};
// metodo get detalle
exports.getMetodoDetalle_id = (req, res) => {
  const { id } = req.params;
  return res.json(
    {
      mensaje: "Estás en el métodoDetalle accion GET | id=" + id,
    } //desestructuración para obtener el id del parametro
    //el id lo obtiene de la ruta con el método params "ruta /13"
  );
};
exports.postMetodoCero = (req, res) => {
  return res.json({
    mensaje: "Estás en el método cero accion POST",
  });
};
//postMetodoCero_json_req usando con un json en el body
/*{"nombre" : "Hugo", "saludo":"valedor"} */
exports.postMetodoCero_json_req = (req, res) => {
  const { nombre, saludo } = req.body; //desestructuración para obtener los valores del json
  //INICIO vadacion conjoimos los valores para mostrarlos en la respuesta   //este es un ejemplo de validación de datos
  const schema = Joi.object({
    nombre: Joi.string().required().messages({
      //"any.required": 'El nombre es obligatorio',
    }),

    saludo: Joi.string().required().messages({
      "any.require": "El saludo es obligatorio",
    })
  });
  const { error, value } = schema.validate({ nombre: nombre, saludo: saludo });
  if (error) {
    res.status(400).json({ mensaje: error.details[0].mensaje });
  } else {
    return res.json({
      mensaje:
        "Estás en el método cero accion POST-json-req " +
        "| nombre=" +
        nombre +
        " | saludo=" +
        saludo,
    });
  }
};
// FIN validacion de datos con Joi

exports.putMetodoCero = (req, res) => {
  return res.json({
    mensaje: "Estás en el método cero accion PUT",
  });
};
exports.deleteMetodoCero = (req, res) => {
  return res.json({ mensaje: "Estás en el método cero accion DELETE" });
};
