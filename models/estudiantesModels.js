const db = require("./../config/db");

//vincula el programa con la base de datos y hace las peticiones

exports.obtenerEstudiantes = async () => {
  const [rows, fields] = await db.execute("SELECT * FROM estudiantes");
  console.log(rows);
  return rows;
};

exports.getEstudianteById = async (id) => {
  const [rows, fields] = await db.execute(
    "SELECT nombre, edad, grado FROM estudiantes WHERE id=?",
    [id]
  );
  console.log(rows);
  return rows;
};

exports.addEstudiantes = async (estudiante) => {
  const [rows, fields] = await db.execute(
    "INSERT INTO estudiantes (nombre, edad, grado) VALUES (?, ?, ?)",
    [estudiante.nombre, estudiante.edad, estudiante.grado]
  );
  return rows;
};

exports.updateEstudiante = async (estudiante) => {
  const [rows, fields] = await db.execute(
    "UPDATE estudiantes SET nombre = ?, edad = ?, grado = ? WHERE id = ?",
    [estudiante.nombre, estudiante.edad, estudiante.grado, estudiante.id]
  );
  return rows;
};

exports.deleteEstudianteById = async (id) => {
  const [rows, fields] = await db.execute(
    "DELETE FROM estudiantes WHERE id = ?",
    [id]
  );
  return rows;
};

exports.getCursosDelEstudiante = async (id) => {
  const [rows, field] = await db.execute(
    "SELECT cursos.nombre, cursos.descripcion FROM cursos INNER JOIN estudiantes ON estudiantes_cursos.estudiante_id = estudiantes.id AND estudiantes.id = ? INNER JOIN cursos ON estudiantes_cursos.curso_id = cursos.id"
  );
};
