const express = require('express')
const bodyParser = require('body-parser')


const app = express()
const port = 8081

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


app.post('/fileReader', (req,res) => {
    var {file} = req.body

    console.log(file)

    var txt = new String(file).trim().toLowerCase()

    var vogais = 0
    var consoantes = 0
    
    for(let i=0; i < txt.length; i++){

        if(txt.charAt(i) == 'a' | txt.charAt(i) == 'e' | txt.charAt(i) == 'i' | 
        txt.charAt(i) == 'o' | txt.charAt(i) == 'u'){
            vogais++;
        }else {

            
            consoantes++
        }
    }

    res.json({message: `O arquivo enviado possui ${vogais} vogais, ${consoantes} consoantes e demais caracteres!`})
})


app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(port, () => {
console.log('Servidor rodando na porta ' + port)
})