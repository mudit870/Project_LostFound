const express = require("express")
const router = express.Router()
const Info = require("../models/info")

router.post("/",async (req,res)=>{

    try{

   
   const result = await Info.findOne({aadharId:req.body.id})

   if(result){
    result.photo = req.body.photo
    result.station_address = req.body.station_address
    result.date = req.body.date

    result.save()

    res.status(200).json({
        success:true,
        message:"Updated"
    })
   }
   else{
    const newInfo = new Info({
        aadharId:req.body.id,
        photo:req.body.photo,
        station_address:req.body.station_address,
        date:req.body.date
    })

    newInfo.save()
    res.status(200).json({
        success:true,
        message:"Saved"
    })
    
   }
}
catch(err){
    res.status(200).json({
        success:false,
        message:"Saved"
    })
}

})




router.get("/",async (req,res)=>{

    try{
       const result = await Info.findOne({email:req.body.email})
       if(result){
        res.status(200).json({
            success:true,
            data:result
        })
       }
       else{
        res.status(200).json({
            success:false,
            
        })
       }
    }
    catch(err){
        res.status(404).json({
            success:false
        })
    }

})

router.get("/all",async (req,res)=>{
    try{
        const result = await Info.find()
        if(result){
            res.status(200).json({
                success:true,
                data:result
            })
        }
        else{
            res.status(200).json({
                success:false,
                
            })
        }
    }
    catch(err){
        res.status(200).json({
            success:false,
            
        })
    }
})

module.exports = router