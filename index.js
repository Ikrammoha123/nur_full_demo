const express = require('express');
const app = express();
const path = require('path');
const mongoose = require("mongoose");
const UserModel = require('./models/userModel');

mongoose.connect("mongodb+srv://salih:J5M1QASXyMoY2FNv@cluster0.5bl1kyj.mongodb.net/nurdata?retryWrites=true&w=majority&appName=Cluster0").then(() => {
  console.info("Connected to DB");
}).catch((e) => {
  console.log("Error: ",e)
})
  
//"mongodb://salih:J5M1QASXyMoY2FNv@ac-zqwzoal-shard-00-00.5bl1kyj.mongodb.net:27017,ac-zqwzoal-shard-00-01.5bl1kyj.mongodb.net:27017,ac-zqwzoal-shard-00-02.5bl1kyj.mongodb.net:27017/?ssl=true&replicaSet=atlas-fxb47n-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"

app.use(express.json());
app.use(express.urlencoded({ extended: true } ))
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))

function sendToTelegram(name,pnumber){
  url=`https://api.telegram.org/bot6635425750:AAHzN0iY9HsRJv3E3g8_hXl4G_dD0pRe0Q0/sendMessage?chat_id=-1001200366475&text=New%20User%20Has%20Been%20Registered%0A%7CName:%20${name}%0A%7CPhone%20Number:%20${pnumber}`
  fetch(url)
  console.log("sended to telegram")
}

app.post('/submit-form', (req, res) =>{
  const name =req.body.name
  const pnumber = req.body.pnumber
  var userModel = new UserModel()
  userModel.name = name
  userModel.pnumber = pnumber
  sendToTelegram(name,pnumber)
  userModel.save()
  .then(data => {
    res.status(200).send({'msg': "Inserted to DB"});
  })
  .catch(err => {
    console.log(err);
    res.status(500).send({'msg': 'Error inserting to DB'});
  });
  console.log(req.body)
  //res.send("tnxs")
} )


//app.use('/', require("./server/routes/main"));
 
app.use((req, res) => {
  res.status(404).send(`<h1>404: Page Not Found</h1>`)
})




app.listen(3000, ()=>{
  console.log('server runing')
});