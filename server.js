// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log(user.username);

// fs.appendFile('greeting.txt','Hi' + user.username + '!\n',()=>{console.log('file is created')});

// console.log(os);
// console.log(fs);

//Attach Other File in srver file

// const notes = require('./notes.js');

// const _ = require('lodash');

// console.log('server file is available');

// var age = notes.age;
// console.log(age);

// const result = notes.addnumber(12,15);

// console.log('sum of two number='+result);

//Lodash 

// var data = ['person','person',1,2,1,2,'name','age','2'];

// var filter = _.uniq(data);
// console.log(filter);

// console.log(_.isString(1));


// const jsonString = '{"name":"shubham","age":20,"city":"sheikhpura"}';

// const jsonObject = JSON.parse(jsonString); // convert into JSON String to object
// console.log(jsonObject.name);

// const Objectf= {name:'shubham',age:20,city:'sheikhpura',village:'deoley'};

// const JsonStrinfied = JSON.stringify(Objectf);// convert into object to JSON String

// console.log(JsonStrinfied);


// CREATE SERVER 

const express = require('express')
const app = express()
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

//POST route to add a person



//menu Item



// workType search in using URL

const personRoutes = require('./routes/personRouts');
app.use('/person', personRoutes);

const menuItemRoutes = require('./routes/menuItemRoutes');
app.use('/menudata', menuItemRoutes);

const hospitaldata = require('./routes/hospitalRoute');
app.use('/',hospitaldata);
// app.get('/shubh', (req,res)=>{
//   res.send('shbham rawat');
// })

// app.get('/chhat',(req,res)=>{
//   const materialofChhat = {
//     name:'chhat',
//     month:'november',
//     fasting:'36Hour',
//     festival:'mahaparv of Bihar',
//     imotion:'100%',
//     iscomingAllBihari:true
//   }
//   res.send(materialofChhat);
// })

//

app.listen(3000,()=>{
  console.log('Listening on port 3000');
})

