const express = require("express");
const router = express.Router();
const usuariosController = require("./../controllers/usuariosController");
// definimos las rutas y derivamos al controlador correspondiente.

router.get("/", usuariosController.getUsuarios);
router.get("/:id", usuariosController.getUsuarioById);
router.post("/", usuariosController.addUsuario);
router.put("/:id", usuariosController.updateUsuario);
router.delete("/:id", usuariosController.deleteUsuarioById);

module.exports = router;
