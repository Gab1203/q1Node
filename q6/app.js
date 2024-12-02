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
    database: "usersDb"
});


app.post('/addTasks', (req,res) => {
    const {email, descricao} = req.body
    dbQuery = 'INSERT INTO tasks (email, descricao) values (?,?)'
    
    db.query(dbQuery, [email, descricao], (error, result) => {
        if(error){
            res.json({message: error.message})
        }
        res.json({message: 'Dados inseridos!'})
    })
})

app.get('/getTasks', (req,res) => {

    dbQuery = 'SELECT * FROM tasks'
    
    db.query(dbQuery, (error, result) => {
        if(error){
            throw error
        }
       
        res.json(result)
    })
})

app.delete('/deleteTasks/:id', (req,res) => {

    const {id} = req.params

    dbQuery = 'DELETE FROM tasks WHERE id = ?'

    db.query(dbQuery, [id], (error, result) => {

       
            if(error){
                res.json({message: error.message})
            }
            res.json({message: 'Registro deletado com sucesso!'})
        
    })




})

app.put('/putTasks/:id', (req,res) => {

    const {id} = req.params     
    const {email, descricao} = req.body

    dbQuery = 'UPDATE tasks SET email = ?, descricao = ? WHERE id = ?'

    db.query(dbQuery, [email, descricao, id], (error, result) => {

       
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