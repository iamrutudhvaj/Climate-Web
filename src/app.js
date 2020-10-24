const express = require("express");
const path = require("path");
const hbs = require('hbs');
const { partials } = require("handlebars");
const app = express();
const port = 3000;

//app.use(express.static('views'));

//console.log(path.join(__dirname, "/public"));
const statis_path = path.join(__dirname, "/public");
const templates_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");


//express.static("view engine", 'hbs');
app.set('view engine', 'hbs');
app.set('views', templates_path);
app.set('views', path.join(__dirname, '../templates/views'));
hbs.registerPartials(partials_path);

//app.set('templates', path.join(__dirname, '../views'));



app.use(express.static(statis_path));



app.get("/", (req, res) => {
    res.render('index');
});

app.get("/about", (req, res) => {
    res.render('about');
});

app.get("/weather", (req, res) => {
    res.render('weather')
});

app.get("*", (req, res) => {
    res.render('404err', {
        errorMsg: 'Oops! Page is not found'
    });
});

app.listen(port, () => {
    console.log(`Port ${port} Listing very well`);
});