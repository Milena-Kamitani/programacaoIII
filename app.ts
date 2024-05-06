import express from 'express'
import mongoose from 'mongoose'
import router from './routes';

mongoose.connect('mongodb://0.0.0.0:27017/maquiagem');
const database = mongoose.connection

database.once('conected', ()=> {
    console.log('banco de dados conectado com sucesso')
})

database.on('error', (error) => {
    console.error('ocorreu um erro: ', error)
})

const app = express()
app.use(express.json())

app.use(router)

app.listen(3000, ()=>{
    console.log("servidor rodando na porta 3000")
})