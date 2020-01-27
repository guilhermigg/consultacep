const express = require('express');
const react = require('react');
const app = express();

app.set('view engine', 'ejs'); // Configurando View Engine
app.use(express.static('public')); // Pasta de Arquivos Estáticos

app.get('/', (req, res)=>{
    res.render('index')
});

app.listen(8080, (e)=> {
    if(e) console.log(e)
    else console.log('Servidor rodando')
})