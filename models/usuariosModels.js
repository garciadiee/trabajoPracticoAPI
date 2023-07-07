const db = require("./../config/db");
const { Router } = require("express");
const hashlib = require("crypto"); // modulo para cifrado de nodejs

// tiene que ser asincronica porque todo se ejecuta al mismo tiempo y de esa manera funciona el console log

// Función para cifrar la contraseña
const encryptPassword = (password) => {
  const hash = hashlib.createHash("sha256");
  hash.update(password);
  return hash.digest("hex");
};

exports.obtenerUsuarios = async () => {
  const [rows, fields] = await db.execute("SELECT * FROM usuarios");
  console.log(rows);
  return rows;
};

exports.getUsuarioById = async (id) => {
  const [rows, fields] = await db.execute(
    "SELECT usuario, password FROM usuarios WHERE id=?",
    [id]
  );
  console.log(rows);
  return rows;
};

exports.addUsuario = async (nuevoUsuario) => {
  const encryptedPassword = encryptPassword(nuevoUsuario.password);
  const [rows, fields] = await db.execute(
    "INSERT INTO usuarios (usuario, password) VALUES (?, ?)",
    [nuevoUsuario.usuario, encryptedPassword]
  );
  return rows;
};
exports.updateUsuario = async (usuario) => {
  const encryptedPassword = encryptPassword(nuevoUsuario.password);
  const [rows, fields] = await db.execute(
    "UPDATE usuarios SET usuario = ?, password = ?, WHERE id = ?",
    [usuario.usuario, encryptedPassword, usuario.id]
  );
  return rows;
};
exports.deleteUsuarioById = async (id) => {
  const [rows, fields] = await db.execute("DELETE FROM usuarios WHERE id = ?", [
    id,
  ]);
  return rows;
};
