const express = require('express');
const router = express.Router();

const Person = require('./../models/person');


router.post('/', async (req,res)=>{

  try{
    const data = req.body //assuring the request body contains the person data
  
    //create a New person document using the mongoose model
    const newPerson = new Person(data);
  
    //Save the new person to the database
   const response = await newPerson.save();
   console.log('data saved');
  res.status(200).json(response);
  }
  catch(err)
  {
    console.log('error',err);
    res.status(500).json({error:'Internal server error'})
  
  }
  
  //    const data = req.body
  
  //    const newperson = new Person(data);
  //    newperson.save((error,savedPerson)=>
  //   {
  //     if(error)
  //     {
  //       console.log('error saving person', error);
  //       res.status(500).json({error:'internal server error'})
  //     }
  //     else 
  //     {
  //       console.log('data saved successfully');
  //       res.status(200).json(savedPerson)
  //     }
  //   })
  // })
  
  // app.get('/', function (req, res) {
  //   res.send('Hello World shubham')
  })


  router.get('/', async (req,res)=>
    {
      try{
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
      } catch(err)
      {
        console.log(err);
        res.status(500).json({error:'Internal server error'});    
      }
    })

    router.get('/:workType', async (req,res)=>
      {
        try{
         const workType  = req.params.workType; //  EXtract the work type from the URL parameters
         if(workType == 'chef' || workType == 'manager' || workType == 'waiter')
         {
          const response = await  Person.find({work: workType});
          console.log('response fetched');
          res.status(200).json(response); 
         }else{
          res.status(404).json({error:'invalid work type'});
         }
        }
        catch(err)
        {
      console.log(err);
      res.status(500).json({error:'Internal Server Error'});
        }
      })

module.exports = router;