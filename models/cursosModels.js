const db = require('./../config/db');

//vincula el programa con la base de datos y hace las peticiones


exports.obtenerCursos = async ()=>{
    const [rows, fields] = await db.execute('SELECT * FROM cursos');
    console.log(rows);
    return rows;
}

exports.getCursoById = async (id) => {
    const [rows, fields] = await db.execute('SELECT nombre, descripcion FROM cursos WHERE id=?', [id]);
    console.log(rows)
    return rows;
}

exports.addCurso = async (curso)=>{
    const [rows, fields] = await db.execute('INSERT INTO cursos (nombre, descripcion) VALUES (?, ?)', [curso.nombre, curso.descripcion]);
    return rows;
}

exports.updateCurso = async (curso) => {

    const [rows, fields] = await db.execute('UPDATE cursos SET nombre = ?, descripcion = ? WHERE id = ?', [curso.nombre, curso.descripcion, curso.id])
    return rows
}

exports.deleteCursoById = async (id) =>{
    const [rows, fields] = await db.execute('DELETE FROM cursos WHERE id = ?', [id]);
    return rows
} 