let express = require('express');
let app = express();
const port =3000;

app.get('/',(req, res,next)=>{
   let err = new Error("this is an error statement ");//error statement
   next(err);
});

app.use((error, req, res, next)=>{
   res.status(500);
   //console.log(error);
   res.send(" error occured is: "+error)
});

app.listen(port, () => {
    console.log(`started on port: ${port}`);
});