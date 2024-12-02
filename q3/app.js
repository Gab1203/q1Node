const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 8081

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())



app.post('/parOuImpar', (req,res) => {
    const {num} = req.body
    var result = ''

    if(num % 2 == 0)
        result = 'Par'
    else
        result = 'Impar'

    res.json({message: `O número ${num} é ${result}!`})

})


app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(port, () => {
console.log('Servidor rodando na porta ' + port)
})