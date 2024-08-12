const express = require('express');
const router = express.Router();

const ceroController = require('../controllers/ceroController');
const mongoController = require('../controllers/mongoController');
const formularioController  = require('../controllers/formularioController');


// Define your routes here
let api_ruta = "/api/v1";
// rutas cero
router.get(`${api_ruta}/cero`, ceroController.getMetodoCero);
router.get(`${api_ruta}/cero/:id`, ceroController.getMetodoDetalle_id);
router.post(`${api_ruta}/cero`, ceroController.postMetodoCero);
router.post(`${api_ruta}/cero-json-req`, ceroController.postMetodoCero_json_req);
router.put(`${api_ruta}/cero`, ceroController.putMetodoCero);
router.delete(`${api_ruta}/cero`, ceroController.deleteMetodoCero);
//Rutas mongoDB
// iniciando con categorias
router.get(`${api_ruta}/mongo/categorias`, mongoController.categorias);
router.get(`${api_ruta}/mongo/categorias/:id`, mongoController.categoriasDetalle);
router.post(`${api_ruta}/mongo/categorias`, mongoController.categorias_post);
router.put(`${api_ruta}/mongo/categorias/:id`, mongoController.categorias_put);
router.delete(`${api_ruta}/mongo/categorias/:id`, mongoController.categorias_delete);
// ahora productos
router.get(`${api_ruta}/mongo/producto`, mongoController.producto);
router.get(`${api_ruta}/mongo/producto/:id`, mongoController.producto_detalle);
router.post(`${api_ruta}/mongo/producto`, mongoController.productos_post);
router.put(`${api_ruta}/mongo/producto/:id`, mongoController.productos_put);
router.delete(`${api_ruta}/mongo/producto/:id`, mongoController.productos_delete);
// rutas de formularios
router.get(`${api_ruta}/mongo/formulario`, formularioController.formularios);
router.get(`${api_ruta}/mongo/califica`, formularioController.calificacion);

module.exports = router;