
const express = require("express");
const router = express.Router();

const ArticuloControlador = require("../controladores/articulo");

//Rutas de pruebas
router.get("/ruta-de-prueba", ArticuloControlador.prueba);
router.get("/curso", ArticuloControlador.curso);

//Ruta util 
router.post("/crear", ArticuloControlador.crear);






module.exports = router;