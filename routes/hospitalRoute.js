const express = require('express');

const router = express.Router();

const hospitaldata = require("./../models/hospitalSchema");

router.post('/hospitaldata', async (req,res)=>{
  try{
    const data = req.body;

    const newData = new hospitaldata(data);
  
   const response = await newData.save();
  console.log('data saved');
  res.status(200).json(response);
  }catch(err)
  {
  console.log(err);
  res.status(404).json({error:'some error in this API'})
  } 
})

router.get('/hospitaldata', async (req,res)=>
{
try{
  const data = await hospitaldata.findById("673560a32289f45fa4b1d26a");
  console.log('data fetched ',data);
   res.status(200).json(data);
}catch(err)
{
  console.log(err);
  res.status(404).json({error:'some error in this API'})
}
 
})

router.put('/hospitaldata/:id', async (req,res)=>
{
  try{
    const hospityalId = req.params.id; //Extract the from the URL parameter

    const updateHospitalData = req.body; //Updated data for person

    const response = await hospitaldata.findByIdAndUpdate(hospityalId,updateHospitalData,{
      new:true, // Return the updated document
      runValidators:true, // Run mongoose validation
    })
    if(!response)
    {
      return res.status(404).json({error:"hospital data not found"});
    }

    console.log("data updated");
    res.status(200).json(response);
  }catch(err){
    console.log(err);
    res.status(500).json({error:'server error in menu section'});
  }
})

router.delete('/hospitaldata/:id', async (req,res)=>
{
  try{
    const hospitalId = req.params.id;
  
    const response = await hospitaldata.findByIdAndRemove(hospitalId);

    if(!response){
      return res.status(404).json({error:"hospital data is not found"});
    }
    console.log('data deleted');
    res.status(200).json({message:'hospital data deleted success'});

  }catch(err){
    console.log(err);
    res.status(500).json({error:'server error in hospital section'});
  }
 
})

module.exports=router;