import React from 'react';
// const express = require('express');
import express from 'express';
// const App = require('../dist/ssr/app');
import App from '../dist/ssr/app'
// const ReactRouter = require(react-router);
import { StaticRouter } from 'react-router';

import reactDomServer from 'react-dom/server';

//ESTO DE ACA ARRIBA DEJA DE USAR UN COIGO NORMAL DE EXPRESS PORQUE PASAMOS A USAR EL CODIGO COMO LO USARIAMOS EN REACT, GRACIAS A BAVEL , EN ESPECIAL (BABEL-CLI);
const app = express();


app.use(express.static('dist'));
app.use('/images' , express.static('images'));

app.get('*', function (req, res) {
  
const html = reactDomServer.renderToString(
  <StaticRouter
  location= {req.url}
  context= {{
    name: 'Juan Diego'
  }}
  >
  <App/>
</StaticRouter>
)
  res.write(`
    <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Platzi Video</title>
     <link rel="stylesheet" href="css/app.css">
  </head>
  <body>
    <div id="home-container">${html}</div>
    <div id="modal-container"></div>
    <!-- <script src="http://localhost:9000/js/app.js"></script> -->
     <script src="/js/app.js"></script>
  </body>
  </html>
  `);
  res.end();
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
  //CUANDO USAS EXPRESS ESE CONSOLE.LOG, SALE EN CMD LINEA DE COMANDOS 
});