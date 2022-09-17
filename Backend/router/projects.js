const router =require('express').Router();
const projectadd =require("../models/projects");

//signup
router.post("/",async(req,res)=>{

    try{
       
        const newProject = new projectadd({
            projectName:req.body.projectName,
            projectDesc:req.body.projectDesc,
            projectSkills:req.body.projectSkills,
            projectPay:req.body.projectPay,
            projectBud:req.body.projectBud,
                    });

        const pro =await newProject.save();
        res.status(200).json(pro);
    }catch(err){
        res.status(500).json(err)
    }
})

router.get("/",async(req,res)=>{

    try{
       
        const projectAll = await projectadd.find();
        res.status(200).json(projectAll);
    }catch(err){
        res.status(500).json(err)
    }
})



module.exports =router;