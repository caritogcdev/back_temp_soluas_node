const { verify } = require("jsonwebtoken");

exports.jsonResponse = function(statusCode, body){

    //Código y cuerpo de la petición HTTP que responde
    // Esto puede usarse o nodemon, simplemente es una 
    // forma para unificar lo que yo estoy mandnado de
    // respuesta desde el servidor a mi front

    return {
        statusCode,
        body,
    };
};