const express = require('express');
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname,"public")))

// app.get('/', function (req, res) {
//   console.log(req);
//     res.send({
//     name: 'Hello World',
//     age: 30})
// })
app
app.post("/api/v1/quiz", function (req, res) {
    const answer = req.body.answer;
    res.send(answer);
  })

app.get("/api/v1/users", function (req, res) {
    res.send('<h1>Hello minato!!!!!!!<h1>')
  })
app.listen(3000,function(){
    console.log("im runnning")
});

