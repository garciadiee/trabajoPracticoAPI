const express = require('express');  //llama a las dependencias
const cors = require('cors');
const morgan = require('morgan');



class Server {
    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
    }

    routes(){
        this.app.use('/estudiantes',require('./../routes/estudiantesRoute'));
        this.app.use('/cursos',require('../routes/cursosRoute'));
        this.app.use('/profesores', require('../routes/profesoresRoute'));

    }

    middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(morgan());
    }

    listen(){
        this.app.listen(3000, ()=>{
            console.log("Servidor corriendo en el puerto 3000");
        })
    }

}

module.exports = Server;