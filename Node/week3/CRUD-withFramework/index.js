const express = require('express');//importing express
const app = express();//creating obj
let fs = require('fs');
const port = 8000;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.listen(port, () => {
    console.log('server started at port 8000');
});
app.get('/', function (req, res) {
    res.json("Crud with-express");
});

//This is reading data from a given file
app.get('/get', (req, res) => {
    res.sendFile(__dirname + '/input.txt')
});

app.get('/readfile', (req, res) => {
    fs.readFile('fruits.txt', (err, data) => {
        if (err) {
            return console.error(err);
        }
        res.json(data.toString());
        res.end();
    });
});
app.post('/createfile', (req, res) => {
    console.log(req.body);
    const content = 'fruits file'
    fs.writeFile('fruits.txt', content, (err) => {
        if (err) {
            console.error(err);
        }
    });
    res.json('created a file successfully')
});
    app.put('/updatefile',(req,res)=>{
        const content = 'fruits file'
        fs.appendFile('fruits', content, (err_file) => {
            if (err_file) {
                return console.log(err_file);
            }
            res.json("Content Updated sucessfully:" );
            res.end();
        });
    });
    app.delete('/deletefile',(req,res)=>{
        const content = 'fruits file'
        fs.unlink('fruits', (err) => {
            if (err) {
                console.log(err);
            }
            else {
                res.json("content Deleted :");
                res.end();
            }
        });

    });