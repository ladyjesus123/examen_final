// Importar dependencias
const express = require('express');//importar express
const hbs = require('hbs');//importar hbs
require('dotenv').config(); // Importar dotenv para las variables de entorno

// Inicializar express
const app = express();
const port = process.env.PORT;
// Se iguala la variable puerto al archivo .env

// llamar a Handlebars hbs
app.set('view engine', 'hbs');

// Registrar los partials para hbs (archivos de código que se va a usar en todas las paginas)
hbs.registerPartials(__dirname + '/views/partials');

// llamar archivos estáticos
app.use(express.static('public'));

// Definir rutas principales aqui "/" es home.hbs
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Lady Castiblanco',
        titulo: 'examen final',
        email: 'correo electronico',
    });
});

// Definir ruta para electricos.hbs
app.get('/Electricos', (req, res) => {
    res.render('electricos', {
        nombre: 'Lady Castiblanco',
        titulo: 'PAGINA ELECTRICOS',
        email: 'correo electronico',
    });
});

// Definir ruta para Gasolina.hbs
app.get('/Gasolina', (req, res) => {
    res.render('gasolina', {
        nombre: 'Lady Castiblanco',
        titulo: 'PAGINA GASOLINA',
        email: 'correo electronico'
    });
});

// Definir ruta para Diesel.hbs
app.get('/Diesel', (req, res) => {
    res.render('diesel', {
        nombre: 'Lady Castiblanco',
        titulo: 'PAGINA DIESEL',
        email: 'correo electronico'
    });
});

// Manejar rutas no encontradas (404)
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Ejemplo de aplicación corriendo en: http://localhost:${port}`);
});


