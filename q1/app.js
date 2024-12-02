const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 8081

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.post('/avg', (req,res) => {
var {n1, n2, n3} = req.body

n1 = Number.parseFloat(n1)
n2 = Number.parseFloat(n2)
n3 = Number.parseFloat(n3)

var notas = [n1,n2,n3]
var soma = 0

for(grades of notas){
if(grades > 10 || grades < 0){
    res.json({message: 'Há nota(s) inválida(s)' })
}else{
    soma += grades
}
}
var media = soma/notas.length

res.json({message: `A média das notas equivale a ${media.toFixed([2])}`})


})

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(port, () => {
console.log('Servidor rodando na porta ' + port)
})