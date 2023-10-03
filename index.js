let express = require('express');
let app = express();
const path = require('path');


app.set('view engine','ejs');

app.use(express.static('public'));
app.use(express.static('project'));

app.get('/', (req,res)=>{
    res.render('pages/home');
});



app.get('/about', (req,res)=>{
    res.render('pages/about');
});

app.get('/product', (req,res)=>{
    res.render('pages/product');
});

app.get('/service', (req,res)=>{
    res.render('pages/service');
});

app.get('/contact', (req,res)=>{
    res.render('pages/contact');
});

app.get('/project/:projectName', (req, res) => {
    const projectName = req.params.projectName;
    res.sendFile(path.join(__dirname, `project/${projectName}/index.html`));
  });


app.listen(4000);