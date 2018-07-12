const config = require('./config/config');
var app = require('./app');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;

mongoose.connect(config.DBStringConnection,  { useNewUrlParser: true }).then(connection =>{
    var server = app.listen(port => {
        console.log(`API REST corriendo en ${port}`)
    })
}).catch(err => {
    console.log(`Error al conectar a la base de datos: ${err}`)
})
