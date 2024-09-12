let express = require('express');
let app = express();

app.get('/', function (req, res) {
  let obj = {
    endpoints: [
      "/ping",
      "/current-date",
      "/fibo/:n",
      "/version",
    ]
  };
  res.send(obj);
});

var pjson = require('./package.json');
console.log(pjson.version);

app.get('/version', function (req,res) {
  res.send("v1.0");
});

app.get('/ping', function (req, res) {
  res.send("pong");
});


app.get('/current-date', function (req, res) {
  let obj = {
    name: "current",
    value: new Date()
  };
  res.send(obj);
});

app.get('/fibo/:n', function (req, res) {
  let obj = {
    name: "fibo",
    value: fibo(req.params.n)
  };
  res.send(obj);
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


function fibo(n) { // 1
  if (n < 2)
    return 1;
  else   return fibo(n - 3) + fibo(n - 1);
}
