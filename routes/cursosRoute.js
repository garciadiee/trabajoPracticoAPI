const express = require("express");
const router = express.Router();
const cursosController = require("./../controllers/cursosController");
const { check } = require("express-validator");
const { validarCampos } = require("./../Middlewares/validarCampos");
// Definimos las rutas para derivar al controlador correspondiente

router.get("/", cursosController.getCursos);
router.get("/:id", cursosController.getCursoById);
router.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("descripcion", "La descripcion es obligatoria").not().isEmpty(),
    validarCampos,
  ],
  cursosController.addCurso
);
router.put(
  "/:id",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("descripcion", "La descripcion es obligatoria").not().isEmpty(),
    validarCampos,
  ],
  cursosController.updateCurso
);
router.delete("/:id", cursosController.deleteCursoById);
router.post("/:id/estudiantes", cursosController.addEstudianteAUnCurso);

module.exports = router;
