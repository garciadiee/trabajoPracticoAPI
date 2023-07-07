const express = require("express");
const router = express.Router();
const profesoresController = require("./../controllers/profesoresController");
const { check } = require("express-validator");
const { validarCampos } = require("./../Middlewares/validarCampos");
// definimos las rutas y derivamos al controlador correspondiente.

// Indicamos cual se encarga de resolver el GET

router.get("/", profesoresController.getProfesores);
router.get("/:id", profesoresController.getProfesoresById);
router.delete("/:id", profesoresController.deleteProfesorById);

router.post(
  //damos validacion a los campos solicitados
  "/",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("especialidad", "La especialidad es obligatoria").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    validarCampos,
  ],
  profesoresController.addProfesor
);
router.put(
  "/:id",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("especialidad", "La especialidad es obligatoria").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    validarCampos,
  ],
  profesoresController.updateProfesor
);

module.exports = router;
