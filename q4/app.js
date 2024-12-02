const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 8081

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


app.post('/conversor', (req,res) => {
    const {pre, pos , temp } = req.body
    temp = Number.parseFloat(temp)

    var result = 0
    if(pre == 'Celsius' && pos == 'Celsius'){
        result = temp
    }else if(pre == 'Celsius' && pos == 'Kelvin'){
        result = temp + 273
    }else if(pre == 'Celsius' && pos == 'Fahrenheit'){
        result = 1.8 * temp + 32
    }else if(pre == 'Kelvin' && pos == 'Kelvin'){
        result = temp
    }else if(pre == 'Kelvin' && pos == 'Celsius'){
        result = temp - 273
    }else if(pre == 'Kelvin' && pos == 'Fahrenheit'){
        result = 1.8 * (temp - 273) + 32
    }else if(pre == 'Fahrenheit' && pos == 'Fahrenheit'){
        result = temp
    }else if(pre == 'Fahrenheit' && pos == 'Celsius'){
        result = (temp - 32)/1.8
    }else if(pre == 'Fahrenheit' && pos == 'Kelvin'){
        result = (temp - 32) * 5/9 + 273
    }


    res.json({message: `A temperatura em ${pos} equivalente a ${temp.toFixed([2])} em ${pre} é ${result.toFixed([2])}`})
})

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(port, () => {
console.log('Servidor rodando na porta ' + port)
})