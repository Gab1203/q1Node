const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 8081

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.post('/passwordGenerator', (req,res) => {

var {size, special} = req.body

const specialChars = ['!', '@', '#', '%', '*', '$', '&']
const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
const numbers = '123456789'




})


app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(port, () => {
console.log('Servidor rodando na porta ' + port)
})