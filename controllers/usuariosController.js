const usuariosModels = require("./../models/usuariosModels");
// traemos todo lo que tiene dentro

exports.getUsuarios = async (req, res) => {
  //evaluamos el bloque dentro del try
  try {
    //obtenemos los datos desde el modelo
    const usuarios = await usuariosModels.obtenerUsuarios();

    //si todo va bien respondemos con los usuarios, del lado del cliente
    //lo obtenemos con json
    //status 200 que todo fue ok
    res.status(200).json({
      success: true,
      data: usuarios,
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

exports.getUsuarioById = async (req, res) => {
  const idUsuarios = req.params.id;
  try {
    const usuarios = await usuariosModels.getUsuarioById(idUsuarios);

    if (usuarios.length < 1) {
      res.status(404).json({
        success: false,
        msg: `No existe: ${idUsuarios}`,
      });
    }
    res.status(200).json({
      success: true,
      usuarios,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Hubo un error al obtener los datos",
    });
  }
};

exports.addUsuario = async (req, res) => {
  const nuevoUsuario = req.body;
  try {
    const id = await usuariosModels.addUsuario(nuevoUsuario);
    res.status(201).json({
      success: true,
      message: "Funcionando",
      nuevoUsuario,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Hubo un error al obtener los datos",
    });
  }
};

exports.updateUsuario = async (req, res) => {
  const id = req.params.id;
  const usuariosActualizado = req.body;

  const usuarios = {
    id,
    ...usuariosActualizado, //muestra todo lo que necesitamos de forma breve
  };
  console.log(usuarios);
  try {
    const listaActualizada = await usuariosModels.updateUsuario(usuarios);
    if (listaActualizada < 1) {
      res.status(404).json({
        success: false,
        message: "Datos no actualizados",
      });
    }
    res.status(200).json({
      success: true,
      message: "Lista actualizada",
      usuarios,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "No funciona",
    });
  }
};
exports.deleteUsuarioById = async (req, res) => {
  const idUsuario = req.params.id;
  try {
    const usuarios = await usuariosModels.deleteUsuarioById(idUsuario);

    if (usuarios.length < 1) {
      //pregunto si existe el usuario
      res.status(404).json({
        success: false,
        mgs: `No existe usuario con el id: ${idUsuario}`,
      });
    }
    //si todo va bien y existe el usuario
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

exports.getCursosUsuarios = async (req, res) => {
  const idUsuarios = req.params.id;
  try {
    const usuarios = await usuariosModels.getCursosUsuarios(idUsuarios);

    if (usuarios.length < 1) {
      res.status(404).json({
        success: false,
        msg: `No existe: ${idUsuarios}`,
      });
    }
    res.status(200).json({
      success: true,
      usuarios,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Hubo un error al obtener los datos",
    });
  }
};
