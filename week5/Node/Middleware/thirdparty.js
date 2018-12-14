var express = require('express')
var app = express();
var cookieParser = require('cookie-parser');
const port =3000;

app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send(req.cookies);
});

app.listen(port, () => {
    console.log(`started on port: ${port}`);
});
