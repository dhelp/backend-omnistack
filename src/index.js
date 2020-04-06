require('dotenv/config');

const express = require('express');

const cors = require('cors');

const routes = require('./routes');

const app = express();


app.use(cors());
app.use(express.json());  
app.use(routes);

//metodos HTTP 
/*
GET: quando se quer buscar/listar alguma coisa no backend
POST: quando se quer criar uma informação no backend
PUT: quando se quer alterar alguma informação do backend
DELETE: quando se quer deletar uma informação no backend 
*/

/*
Tipo de parametros
query: parametros nomeados na rota após o ?
request body: são os campos da requisição    
*/


var port = process.env.PORT || 3333;
app.listen(port, function () {
    console.log('listening on port %s', port);
});



 