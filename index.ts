const express = require("express")
const app = express();

const example = function(){
    console.log("Estoy a la escucha");
}

app.listen(
    9000,example
)