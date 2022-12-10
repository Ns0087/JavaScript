const https = require('https');
const express = require('express');
const bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index1.html");
});

app.post('/',(req,res)=>{
    var city=req.body.CityName;
   const apikey='9de6256551ffbf753ae89652ee1e502d'
   const url='https://api.openweathermap.org/data/2.5/weather?q=' +city+'&appid='+apikey+'&units=metric'
   https.get(url,(resp)=>{
    resp.on('data', (data)=>{
        const weatherdata=JSON.parse(data);
        const temp=weatherdata.main.temp;
    console.log(temp);
    const description=weatherdata.weather[0].description;
    console.log(description);
    res.write("<head>");
    res.write("<style>");
    res.write(".b{");
    res.write("background-image: url('https://mdbootstrap.com/img/Photos/Others/images/13.jpg');");
    res.write("height: 100vh;");
    res.write("background-repeat: no-repeat;");
    res.write("background-size: cover;}");
    res.write(".mydiv{ text-align: center;}");
    res.write("</style>");
    res.write("<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css\" integrity=\"sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65\" crossorigin=\"anonymous\" />");
    res.write("</head>");
    
    res.write("<body class=\"b\">");
    res.write("<div style=\"text-align: center;  background-color: rgb(217, 201, 186);\" class=\"pt-5 container col-md-6 card\">");
    res.write("<div class=\"h2 card-body\">Temprature of "+city+" is "+temp+" degree </div>");
    res.write("<div class=\"h4 card-body\">Description : "+description+"</div>");
    res.write("<a href=\"/\">Check for Other City</a>");
    res.write("<div class=\"pt-5\"></div>");
    res.write("</div>");
    res.end("</body>");
    })
   })
})

app.listen(8000, function(){
  console.log("Listening on server on port 8000")
});