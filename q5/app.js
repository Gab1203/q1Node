const express = require('express')
const bodyParser = require('body-parser')
const fs = require('node:fs')

const app = express()
const port = 8081

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


app.post('/fileReader', (req,res) => {
    const {file} = req.body

    console.log(file)
    var wordNumber = file.trim().split(/\s+/).length


    res.json({message: `O arquivo enviado possui ${wordNumber} palavras!`})
})


app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(port, () => {
console.log('Servidor rodando na porta ' + port)
})