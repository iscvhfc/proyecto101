
const vFormulario = require('../modelos/formulario');
const vCalificacion = require('../modelos/calificacion');

const Joi = require("@hapi/joi"); //validacion con joi
const slug = require('slug'); //plugin para generar slug

exports.formularios  = async (req, res) => {
    try {
        let datosFormulario = await vFormulario.find().lean().sort({ _id: 1 });
        return res.status(200).json(datosFormulario);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
}
// calificacion
exports.calificacion  = async (req, res) => {
    try {
        let datosCalificacion = await vCalificacion.find().lean().sort({ _id: 1 });
        return res.status(200).json(datosCalificacion);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
}

/*
exports.categoriasDetalle  = async (req, res) => {
    //cargamos la desestrucción de categorias busqueda por id
    const { id } = req.params;
    try {
        let datosCategoria = await vCategorias.findById(id).lean();
        if (!datosCategoria) {
            return res.status(400).json({ mensaje: 'Error deconocido categoria' });            
        }
        return res.status(200).json(datosCategoria);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
}

/* {"nombre": "mi categoria desde rest"} comentario
exports.categorias_post = async (req, res) => {
    const { nombre } = req.body;
    const schema = Joi.object({ 
        nombre: Joi.string().required().messages({
            "any.required": `El nombre es obligatorio`
        })
    });

    const { error, value } = schema.validate({ nombre: nombre });
    if (error) { 
        return res.status(400).json({ mensaje: error.details[0].message }); // Cambié `mensaje` a `message`
    } 

    try {
        let categoriaV = await vCategorias.findOne({ nombre: nombre });
        if (categoriaV) {
            return res.status(400).json({ mensaje: 'Categoría ya existe' }); // Agregué `return`
        }

        const save = new vCategorias({ 
            nombre: nombre 
        });

        await save.save();
        return res.status(201).json({ mensaje: 'Categoría creada correctamente' }); // Cambié `response` a `res`
    } catch (error) {
        return res.status(401).json({ mensaje: error.message });
    }
};


/*exports.categorias_post  = async (req, res) => {
    const { nombre } = req.body;
    const schema = Joi.object({ //INICIO vadacion conjoimos los valores para mostrarlos en la respuesta   //este es un ejemplo de validación de datos
    nombre: Joi.string().required().messages({
      "any.required": `El nombre es obligatorio`
    })
  });
  const { error, value } = schema.validate({ nombre: nombre});
  if (error) { // si hay error en la validacion
    return res.status(400).json({ mensaje: error.details[0].mensaje });
  } else {
    try {
        let categoriaV = await vCategorias.findOne({ nombre: nombre });
        if (categoriaV) {
            return res.status(400).json({ mensaje: 'Categoría ya existe' });
        }
        save = new vCategorias(
            { 
                nombre: nombre 
            }
        );
        await save.save();
        res.status(201).json({ mensaje: 'Categoría creada correctamente'});

    } catch (error) {
        res.status(401).json({ mensaje: error.message });
    }
  }

// FIN validacion de datos con Joi

} comentario

exports.categorias_put = async (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;
    const schema = Joi.object({ 
        nombre: Joi.string().required().messages({
            "any.required": `El nombre es obligatorio`
        })
    });

    const { error, value } = schema.validate({ nombre: nombre });

    if (error) { 
        return res.status(400).json({ mensaje: error.details[0].message }); 
    } else {

    try {
        let categoriaU = await vCategorias.findById(id);
        if (!categoriaU) {
            return res.status(400).json({ mensaje: 'Error desconocido' }); 
        }
        await categoriaU.updateOne ({nombre : nombre,  slug : slug(nombre).toLowerCase()});
        return res.status(200).json({ mensaje: 'Se modificó el registro con éxito' }); 
    } catch (error) {
        return res.status(400).json({ mensaje: error.message });
    }
    }
    
}

//categorias_delete
exports.categorias_delete = async (request, response) => 
    {
        const { id } = request.params;
        try {
            let categoria = await vCategorias.findById(id);
            if (!categoria) {
                return response.status(400).json({ mensaje: "Error desconocido" });
            }
            let producto = await vProductos.findOne({categoria_id: id}).lean();
            if(producto)
            {
                return response.status(400).json({ mensaje: "No se puede eliminar el registro" });
            }
            await categoria.deleteOne();
            response.status(200).json({ mensaje: "Se eliminó el registro exitosamente" });
        } catch (error) {
            return response.status(400).json({ mensaje: error.message });
        }
    }

/*                       PRODUCTO                      comentario
exports.producto  = async (req, res) => {
    try {
        let datosProducto = await vProductos.find().populate('categoria_id').lean().sort({ _id: -1 });
        return res.status(200).json(datosProducto);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
}
//producto_detalle
exports.producto_detalle  = async (req, res) => {
    const { id } = req.params;
    try {
        let datosProducto = await vProductos.findById(id).populate('categoria_id');
        return res.status(200).json(datosProducto);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
}
//producto_post
/*
{
   
    "nombre" : "Producto desde la api rest",
    "descripcion" : "producto de prueba",
    "precio" : "2350",
    "categoria_id" :"66b8bd0e3212c326ff7d2907")
}
comentario
exports.productos_post = async (request, response) => 
    {
        const { nombre, descripcion, precio, categoria_id } = request.body;
        const schema = Joi.object({
            nombre: Joi.string().min(6).required().messages({
                'string.min': `El campo nombre debe tener al menos 6 caracteres`,
                'any.required': `El campo nombre es obligatorio`
            }),
            descripcion: Joi.string().min(6).required().messages({
                'string.min': `El campo descripción debe tener al menos 6 caracteres`,
                'any.required': `El campo descripción es obligatorio`
            }),
            precio: Joi.number().integer().min(1).required().messages({
                'any.required': `El campo precio es obligatorio`,
                'number.min': `El campo precio debe tener al el valor 1`
            }),
            categoria_id: Joi.string().required().messages({
                'any.required': `El campo categoria_id es obligatorio`
            })
        });
        const { error, value } = schema.validate(
            { 
                nombre : nombre, 
                descripcion : descripcion, 
                precio : precio, 
                categoria_id : categoria_id 
            });

        if(error)
        {
            return response.status(400).json({ mensaje: error.details[0].message });
        }
        
            try {
                const save = new vProductos(
                    {
                        categoria_id: categoria_id,
                        nombre: nombre,
                        precio: precio,
                        descripcion: descripcion
                    }
                );
                await save.save();
                return response.status(201).json({ mensaje: "Se creó el registro exitosamente" });
            } catch (error) {
                response.status(400).json({ mensaje: error.message });
            }
        
    
    }

    //producto_put
    exports.productos_put = async (request, response) => 
        {
            const { id } = request.params;
            const { nombre, precio, descripcion, categoria_id } = request.body;
            const schema = Joi.object({
                nombre: Joi.string().min(6).required().messages({
                    'string.min': `El campo nombre debe tener al menos 6 caracteres`,
                    'any.required': `El campo nombre es obligatorio`
                }),
                descripcion: Joi.string().min(6).required().messages({
                    'string.min': `El campo descripción debe tener al menos 6 caracteres`,
                    'any.required': `El campo descripción es obligatorio`
                }),
                precio: Joi.number().integer().min(1).required().messages({
                    'any.required': `El campo precio es obligatorio`,
                    'number.min': `El campo precio debe tener al el valor 1`,
                }),
                categoria_id: Joi.string().required().messages({
                    'any.required': `El campo categoria_id es obligatorio`
                })
            });
            const { error, value } = schema.validate(
                { 
                    nombre: nombre, 
                    descripcion: descripcion, 
                    precio: precio, 
                    categoria_id: categoria_id 
                }
            );

            if(error)
            {
                response.status(400).json({ mensaje: error.details[0].message });
            }else
            {
                try {
                    let producto = await vProductos.findById(id);
                    if (!producto) {
                        return response.status(400).json({ mensaje: "Error desconocido" });
                    }
                    await producto.updateOne(
                        { 
                            categoria_id: categoria_id, 
                            nombre: nombre, 
                            precio: precio, 
                            descripcion: descripcion, 
                            slug: slug(nombre).toLowerCase() 
                        }
                    );
                    return response.status(200).json({ mensaje: "Se modificó el registro exitosamente" });
                } catch (error) {
                    return response.status(400).json({ mensaje: error.message });
                }
                
            }
        }
        exports.productos_delete = async (request, response) => 
            {
                const { id } = request.params;
                try {
                    let producto = await vProductos.findById(id);
                    if (!producto) {
                        return response.status(400).json({ mensaje: "Error desconocido" });
                    }
                    let fotos = await vProductosFotos.findOne(
                        {
                            producto_id:id
                        }).lean();
                    if(fotos)
                    {
                        return response.status(400).json({ mensaje: "No se puede eliminar el registro" });
                    }
                    await producto.deleteOne();
                    return response.status(200).json({ mensaje: "Se eliminó el registro exitosamente" });
                } catch (error) {
                    response.status(400).json({ mensaje: error.message });
                }
            }
            */