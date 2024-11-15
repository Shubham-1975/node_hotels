const express = require('express');

const router = express.Router();

const menuItem = require('./../models/menu');

router.post('/', async (req,res)=>
  {
    try{
      const datamenu = req.body;
      const newMenuItem = new menuItem(datamenu);
      const postingData = await newMenuItem.save();
      console.log('MENUDATA SAVED');
      res.status(200).json(postingData);
    }
    catch(err)
    {
      console.log(err);
      res.status(500).json({error:'server error of menu'});
    }
  })
  
  router.get('/', async (req,res)=>
    {
      try {
        const menudataShow = await menuItem.find();
        console.log('menu data fatched');
        res.status(200).json(menudataShow);
      }
      catch(err)
      {
        console.log(err);
        res.status(500).json({error:'menu Item error'});
      }
    })

  router.get('/:nameType' , async (req,res)=>
  {
    try{
      const nameType = req.params.nameType;
      const response = await menuItem.find({name:nameType});
      console.log('data fetched')
      res.status(200).json(response);
    }
    catch(err)
    {
      console.log(err);
      res.status(404).json({error:'internal server error in menuItem'})
    }
  })

  router.put('/:id', async (req,res)=>
  {
    try{
      const menuId = req.params.id;

      const updatedata = req.body;

      const response = await menuItem.findByIdAndUpdate(menuId,updatedata,{
        new:true,
        runValidators:true
      })
      if(!response){
        return res.status(404).json({error:'data is not found'})
      }
      console.log("data updated");
      res.status(200).json({message:"data updated successful"});
    }catch(err){
     console.log(err);
     res.status(500).json({error:"some internal error in menu"});
    }
  })
    
  
  router.delete('/:id', async (req,res)=>
  {
    try{
      const menuId = req.params.id;

      const response = await menuItem.findByIdRemove(menuId);

      if(!response){
        return res.status(404).json({error:'menu data is not found'});
      }
      console.log("data deleted");
      res.status(200).json(response);
    }catch(err){
      console.log(err);
      res.status(404).json({error:'internal server error in menuItem'})
    }
   
  })

  // github:jghht
    module.exports = router;