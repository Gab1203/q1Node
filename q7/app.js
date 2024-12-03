const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 8081

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.post('/calendario', (req,res) => {
var {date} = req.body


daty = new Date(date)

var nextYear = new Date()

daty.setDate(daty.getDate() + 1)
console.log(daty.toString())

nextYear.setFullYear(daty.getFullYear() + 1, 0, 1   )

console.log(nextYear.toString())

var diferencaMili = Math.abs(nextYear - daty)  
var incomingDays = Math.floor((diferencaMili)/(1000 * 60 * 60 * 24))  

res.json({message: `Faltam ${incomingDays} dias para o ano seguinte à data inserida!`})

})


app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(port, () => {
console.log('Servidor rodando na porta ' + port)
})