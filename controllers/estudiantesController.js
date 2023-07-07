const estudiantesModel = require("./../models/estudiantesModels");
// los controladores se encargan de la parte logica

exports.getEstudiantes = async (req, res) => {
  //evaluamos el bloque dentro del try
  try {
    //obtenemos los datos desde el modelo
    const estudiantes = await estudiantesModel.obtenerEstudiantes();

    //si todo va bien respondemos con los usuarios, del lado del cliente
    //lo obtenemos con json
    //status 200 que todo fue ok
    res.status(200).json({
      success: true,
      data: estudiantes,
    });
  } catch (error) {
    //si las instrucciones dentro del bloque try fallan,
    //capturamos el error, lo mostramos en consola
    //y devolvemos la info del error al cliente
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Hubo un error al obtener los datos",
    });
  }
};

exports.getEstudiantesById = async (req, res) => {
  const idEstudiante = req.params.id;
  try {
    const estudiante = await estudiantesModel.getEstudianteById(idEstudiante);

    if (estudiante.length < 1) {
      res.status(404).json({
        success: false,
        msg: `No existe: ${idEstudiante}`,
      });
    }
    res.status(200).json({
      success: true,
      estudiante,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Hubo un error al obtener los datos",
    });
  }
};

exports.addEstudiantes = async (req, res) => {
  const nuevoestudiante = req.body;
  try {
    const id = await estudiantesModel.addEstudiantes(nuevoestudiante);
    res.status(201).json({
      success: true,
      message: "Funcionando",
      nuevoestudiante,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Hubo un error al obtener los datos",
    });
  }
};

exports.updateEstudiante = async (req, res) => {
  const id = req.params.id;
  const estudianteActualizado = req.body;

  const estudiante = {
    id,
    ...estudianteActualizado, //muestra todo lo que necesitamos de forma mas breve
  };
  console.log(estudiante);
  try {
    const listaActualizada = await estudiantesModel.updateEstudiante(
      estudiante
    );
    if (listaActualizada < 1) {
      res.status(404).json({
        success: false,
        message: "Datos no actualizados",
      });
    }
    res.status(200).json({
      success: true,
      message: "Lista actualizada",
      estudiante,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "No funciona",
    });
  }
};

exports.deleteEstudianteById = async (req, res) => {
  const idEstudiante = req.params.id;
  try {
    const estudiante = await estudiantesModel.deleteEstudianteById(
      idEstudiante
    );

    if (estudiante.length < 1) {
      //pregunto si existe el usuario
      res.status(404).json({
        success: false,
        mgs: `No existe usuario con el id: ${idEstudiante}`,
      });
    }
    //si todo va bien y existe el usuario =D
    res.status(200).json({
      success: true,
      msg: "El usuario fue eliminado con exito",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Hubo un error al eliminar el usuario",
    });
  }
};

exports.getCursosDelEstudiante = async (req, res) => {
  const idEstudiante = req.params.id;
  try {
    const estudiante = await estudiantesModel.getEstudianteById(idEstudiante);

    if (estudiante.length < 1) {
      res.status(404).json({
        success: false,
        msg: `No existe: ${idEstudiante}`,
      });
    }
    res.status(200).json({
      success: true,
      estudiante,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Hubo un error al obtener los datos",
    });
  }
};
