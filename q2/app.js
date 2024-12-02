const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 8081

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


app.post('/imc', (req,res) => {
    var {weight, height} = req.body

    weight = Number.parseFloat(weight)
    height = Number.parseFloat(height)

    if(weight <= 0 || height <= 0)
        res.json({message: 'Peso ou altura inválido(s)!'})

    var imc = weight / height**2

    res.json({message: `Seu IMC é ${imc.toFixed([2])}`})
})


app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(port, () => {
console.log('Servidor rodando na porta ' + port)
})