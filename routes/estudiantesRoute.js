const express = require("express");
const router = express.Router();
const estudiantesController = require("./../controllers/estudiantesController");
const { check } = require("express-validator");
const { validarCampos } = require("./../Middlewares/validarCampos");
// Definimos las rutas para derivar al controlador correspondiente

// Indicamos cual se encarga de resolver el GET

router.get("/", estudiantesController.getEstudiantes);
router.get("/:id", estudiantesController.getEstudiantesById);
router.get("/:id/cursos", estudiantesController.getCursosDelEstudiante);
router.delete("/:id", estudiantesController.deleteEstudianteById);
router.post(
  "/", //damos validacion a los campos solicitados
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

module.exports = router;
