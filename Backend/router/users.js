const router =require('express').Router();
const Puser =require("../models/users");
const bcrypt =require('bcrypt');

//signup
router.post('/register',async(req,res)=>{
    try{
        const salt= await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(req.body.password,salt);

        const newPuser =new Puser({
            username:req.body.username,
            email:req.body.email,
            password:hashedPassword,
        });

        const puser =await newPuser.save();
        res.status(200).json(puser._id);
    }catch(err){
        res.status(500).json(err)
    }
})  

router.post("/login",async(req,res)=>{
  
    try{
        const user =await Puser.findOne({username:req.body.username});
        !user && res.status(400).json("Wrong username or password");

        const validPassword =await bcrypt.compare(
            req.body.password,
            user.password
        );
        !validPassword && res.status(400).json("Wrong username or password");
        res.status(200).json({_id: user._id,username: user.username});
    }catch(err){
        res.status(500).json(err);
        }

})



module.exports =router;