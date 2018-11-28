
const express = require('express')
const app = express()
const path = require('path')
var port = process.env.PORT || 8092;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '/')));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
  });


app.listen(port, () => console.log(`Example app listening on port ${port}!`))