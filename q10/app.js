const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql2')

const app = express()
const port = 8081
var dbQuery = ''

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Gab123",
    database: "agendaDb"
});


app.post('/addCtts', (req,res) => {
    const {nome, email, telefone} = req.body
    dbQuery = 'INSERT INTO contatos (nome, email, telefone) values (?,?, ?)'
    
    db.query(dbQuery, [nome, email, telefone], (error, result) => {
        if(error){
            res.json({message: error.message})
        }
        res.json({message: 'Dados inseridos!'})
    })
})

app.get('/getCtts', (req,res) => {

    dbQuery = 'select * from contatos'
    
    db.query(dbQuery, (error, result) => {
        if(error){
            throw error
        }
       
        res.json(result)
    })
})

app.delete('/deleteCtts/:id', (req,res) => {

    const {id} = req.params

    dbQuery = 'DELETE FROM contatos WHERE id = ?'

    db.query(dbQuery, [id], (error, result) => {

       
            if(error){
                res.json({message: error.message})
            }
            res.json({message: 'Registro deletado com sucesso!'})
        
    })




})

app.put('/putCtts/:id', (req,res) => {

    const {id} = req.params     
    const {nome, email, telefone} = req.body

    dbQuery = 'UPDATE contatos SET nome = ?, email = ?, telefone = ? WHERE id = ?'

    db.query(dbQuery, [nome, email, telefone, id], (error, result) => {

       
            if(error){
                res.json({message: error.message})
            }
            res.json({message: 'Registro atualizado com sucesso!'})
        
    })

})

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(port, () => {
console.log('Servidor rodando na porta ' + port)
})