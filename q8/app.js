const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 8081

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

app.post('/passwordGenerator', (req,res) => {

var {size, special} = req.body

size = Number.parseInt(size)
special = Number.parseInt(special)

console.log(size)
console.log(special)

var specialChars = ['!', '@', '#', '%', '*', '$', '&']
var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789'

var indexBusy = []
var password = ''
var passArray = []

for(let i = 0; i < size; i++){
    password += '.'
    passArray.push(password.charAt(i))
}


for(let i = 0; i < size; i++){
    
    
    passArray[i] = chars.charAt(getRndInteger(0, chars.length - 1))
    
    
}

console.log(passArray.join(""))

if(special > 0){

for(let i = 0; i < special; i++){

    let indice = getRndInteger(0, password.length - 1)
    if(!indexBusy.includes(indice)){

        passArray[indice] = specialChars[getRndInteger(0, specialChars.length - 1)]
        indexBusy.push(indice)
    }

}
}

password = passArray.join("")


res.json({message: `Senha gerada: ${password}`})


})


app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(port, () => {
console.log('Servidor rodando na porta ' + port)
})