const express = require("express")
const app = express();
import router from './src/routes'

const example = function(){
    console.log("Estoy a la escucha");
}

router(app);

app.listen(
    9000,example
)