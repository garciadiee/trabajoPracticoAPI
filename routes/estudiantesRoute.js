const express = require("express");
const router = express.Router();
const estudiantesController = require("./../controllers/estudiantesController");
const { check } = require("express-validator");
const { validarCampos } = require("./../Middlewares/validarCampos");
// Definimos las rutas para derivar al controlador correspondiente

router.get("/", estudiantesController.getEstudiantes);
router.get("/:id", estudiantesController.getEstudiantesById);
router.get("/:id/cursos", estudiantesController.getCursosDelEstudiante);
router.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("edad", "La edad es obligatoria").not().isEmpty(),
    check("grado", "El grado es obligatorio").not().isEmpty(),
    validarCampos,
  ],
  estudiantesController.addEstudiantes
);
router.put(
  "/:id",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("edad", "La edad es obligatoria").not().isEmpty(),
    check("grado", "El grado es obligatorio").not().isEmpty(),
    validarCampos,
  ],
  estudiantesController.updateEstudiante
);
router.delete("/:id", estudiantesController.deleteEstudianteById);

module.exports = router;
