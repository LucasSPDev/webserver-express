const express = require('express')
const app = express()

const hbs = require('hbs');
require('./hbs/helpers')

const port = process.env.PORT || 3000

// **************************************************************************
// NOTA: midelware es un callback que se ejecuta siempre, sin importar la URL
//  nodemon server -e js,hbs,html,css, para monitorear archivos
// **************************************************************************
hbs.registerPartials(__dirname + '/views/parciales');
app.use(express.static(__dirname + '/public'))

// Express HBS engine
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    // // res.send('Hola Mundo')
    // let salida = {
    //     nombre: 'Lucas',
    //     edad: 32,
    //     url: req.url
    // }
    res.render('home', {
        nombre: 'lucas'
    })
})

app.get('/about', function(req, res) {
    // // res.send('Hola Mundo')
    // let salida = {
    //     nombre: 'Lucas',
    //     edad: 32,
    //     url: req.url
    // }
    res.render('about')
})


// app.get('/data', function(req, res) {
//     res.send('Hola Data')
// })

app.listen(port, () => {
    console.log(`Escuchando peticiones en el ${port}`)
})