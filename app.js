const express = require('express');
const app = express();

//Dependencia CORS
const cors = require('cors');
app.use(cors());

//Dependencia manejo de BD Mongo
const mongoose = require('mongoose');

//
const { urlencoded } = require('body-parser');

//Uso de dependencias Manejo de body en las peticiones y objetos json
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//CONFIGURACION DE LA CABECERA Y CORS(CONTROL PARA LAS PETICIONES HTTP ReQUEST)
app.use((req, res, next) => {
    res.header("access-control-allow-origin", "*");
  
    res.header(
      "access-control-allow-headers",
      "authorization, X-API-KEY, origin, X-Requested-With, content-type, accept, Access-Control-Allow-Request-Method"
    );
  
    res.header(
      "Access-Control-Allow-Request-Method",
      "GET, POST, PUT, DELETE,OPTIONS"
    );
  
    res.header("Allow", "GET, POST, PUT, DELETE,OPTIONS");
  
    next();
  });

  app.use(require('./routes/router'));

  module.exports = app;