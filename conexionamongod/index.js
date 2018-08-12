let express = require("express")
let bodyParser = require("body-parser")
let app = express()

let controller = require('./controller')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(function(req, res, next) { res.header("Access-Control-Allow-Origin", "*"); res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); next(); }); 


// app.get recibe 2 parametros, un string que es el url 
// y un handler cuando se accesa a ese string
app.get('/', function (request, response) {
    response.send('HOLA TERRICOLA')
})
app.get('/adios', function (request, response) {
    response.send('ADIOS MUNDO CRUEL')
})
app.get('/ayiura', function (request, response) {
    response.send('AYIUUURAAA')
})
app.get('/json', function (request, response) {
    let objJson = {
        hola: 'amigos',
        como: ['les', 'ha', 'ido'],
        que: {
            cuenta: 'la mala',
            vida: '?'
        }
    }
    response.send(objJson)
})

// URL CON PARAMETROS

app.get('/saludo/:quien', controller.saludo)
app.get('/carta-de/:remitente/para/:destinatario', controller.carta )
app.get('/blog/:numero', controller.blog)

// PRIMER GET A BASE DE DATOS

app.get('/personas', controller.getPersonas)
app.get('/personas/:id', controller.getPersona)
app.post('/personas', controller.insertPersona)
app.put('/personas/:id', controller.updatePersona)
app.delete('/personas/:id', controller.removePersona)

// ASí podría mondificar por completo un Recurso Lugar
// app.get('/lugares', controller.getLugares)
// app.get('/lugares/:id', controller.getLugar)
// app.post('/lugares', controller.insertLugar)
// app.put('/lugares/:id', controller.updateLugar)
// app.delete('/lugares/:id', controller.removeLugar)

// app.listen recibe 2 parametros, un número que es el puerto donde escucharé
// y una función callback que ejecutará cuando estoy corriendo
app.listen(3000, function () {
     console.log('Example app listening on port 3000!')
})