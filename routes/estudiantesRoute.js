const express = require('express');
const router = express.Router();
const estudiantesController = require('./../controllers/estudiantesController');
// Definimos las rutas para derivar al controlador correspondiente

router.get('/', estudiantesController.getEstudiantes);
router.get('/:id', estudiantesController.getEstudiantesById);
router.get('/:id/cursos', estudiantesController.getCursosDelEstudiante);
router.post('/', estudiantesController.addEstudiantes);
router.put('/:id', estudiantesController.updateEstudiante);
router.delete('/:id',estudiantesController.deleteEstudianteById);

module.exports = router;
