const express = require('express');
const router = express.Router();
const estudiantesController = require('./../controllers/estudiantesController');
// Definimos las rutas para derivar al controlador correspondiente

router.get('/', estudiantesController.getEstudiantes);
router.get('/:id', usuariosController.getUsuarios)
router.post('/', usuariosController.addUser)

module.exports = router;

exports.addUser = async (user) =>{
    console.log(user);
    const [rows, fields] = await db.execute('INSERT INTO usuarios (username,')
    

}