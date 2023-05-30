const db = require('./../config/db');


exports.obtenerEstudiantes = async ()=>{
    const [rows, fields] = await db.execute('SELECT FROM estudiantes , username, email, role FROM usuarios');
    console.log(rows);
    return rows;
};

exports.addUser = async(user)=>{
    const [rows, fields] = await db.execute('INSERT INTO usuarios (username, password, email, role,) values ?', [user]);
    return rows
}