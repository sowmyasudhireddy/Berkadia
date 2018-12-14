const express = require('express');
var app = express();
const port =3000;

let middleware = (req, res, next) => {
      console.log('Middleware is executing');
      next();
}

app.get('/', middleware, (req, res, next) => {
      res.send('executed');
});
app.listen(port, () => {
      console.log(`started on port: ${port}`);
  });
