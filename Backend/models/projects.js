const mongoose =require('mongoose');

const projectSchema = new mongoose.Schema(
    {
        projectName:{
            type:String,
            require:true,
            min:6,
        },
        projectDesc:{
            type:String,
            require:true,
            max:50,
        },
        projectSkills:{
            type:String,
            require:true,
            min:6,
        },
        projectPay:{
            type:String,
            require:true,
            min:6,
        },
        projectBud:{
            type:Number,
            require:true,
            max:50,
        },
    },
    {timestamps:true}
);

module.exports =mongoose.model("Project",projectSchema);

