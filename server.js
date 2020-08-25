const express = require('express');
const path = require('path');
const session = require('cookie-session'); // Charge le middleware de sessions
const bodyParser = require('body-parser'); // Charge le middleware de gestion des paramètres
const urlencodedParser = bodyParser.urlencoded({extended: false});


const app = express();
// Load the css files
app.use(express.static(path.join(__dirname + '/public')));

/* On utilise les sessions */
app.use(session({secret: 'todotopsecret'}));


/** JEU **/
app.get('/jeu', function(req, res) {
    res.render('jeu.ejs');
});

/** nouvelle partie, form pour entrer prénom **/
// app.post('/ajouter', urlencodedParser, function(req, res) {
//     if (req.body.new != '') {
//         req.session.todolist.push(req.body.new);
//     }
//     res.redirect('/');
// });




/** REDIRECTION **/
app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
});

app.listen(8080);