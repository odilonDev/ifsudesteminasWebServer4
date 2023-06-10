const express = require('express');
const bodyparser = require('body-parser');
const path = require("path");
const app = express();

app.use(bodyparser.urlencoded({extended: false}));
app.use('/login', express.static(__dirname + '/public/login'));
app.use('/feedback', express.static(__dirname + '/public/feedback'));

app.post('/login', (req, res, next) => {
        console.log('middleware 1');
        console.log("Nome: " + req.body.nome_campo);
        console.log("Email: " + req.body.email_campo);
        console.log("Comentários: " + req.body.comentarios_campo);
        next();
});

app.use('/login', (req, res) => {
    console.log('middleware 2');
    res.redirect('/feedback');
});

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, "views"));

app.get('/', (req, res) => {
    res.send("<h1>Página Inicial</h1>");
});

app.get('*', (req, res) => {
    res.render("index");

});


app.listen(3000, () =>console.log("Servidor escutando na porta 3000 ..."));





