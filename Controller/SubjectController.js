const SubjectSchema=require('../Model/SubjectModel')



const SubjectInsert=async(req,res)=>{
    try{
        console.log(req.body,'insert')
        const {subjectName}=req.body;


        const SubjectInfo=new SubjectSchema({subject_name:subjectName});
        const SubjectSaved=await SubjectInfo.save();
        res.send(SubjectSaved);
    }catch(error){
        console.log(error.message);
        res.status(500).send("Internal some error occured");
    }
}

const GetSubject = async (req, res) => {
    try {
        const SubjectInfo= await SubjectSchema.find();
        // console.log(SubjectInfo)
        res.send(SubjectInfo);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error occurred");
    }
}



const DeleteSubject =  async (req, res)=> {
    try{
        let SubjectInfo = await SubjectSchema.findById(req.params.id);
        if (!SubjectInfo) {
            return res.status(404).send("Not Found");
        }
        SubjectInfo = await SubjectSchema.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Subject deleted successfully", Category : SubjectInfo });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Some Error ouccured");
    }
}


const UpdateSubject =  async (req,res)=>{
    try{

        const {subject_name}={...req.body};
       console.log(subject_name);

        const newCategory = {};
        if (subject_name) { newCategory.subject_name = subject_name};
    
        let newData = await SubjectSchema.findById(req.params.id);
        if (!newData) {
            return res.status(404).send("Not Found");
        }

        // console.log(newCategory,'newCategory')

        newData = await SubjectSchema.findByIdAndUpdate(req.params.id,{
        $set: newCategory }, { new: true })
        res.json({ newData});

    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Some Error ouccured");
    }
}




module.exports={SubjectInsert,GetSubject,DeleteSubject,UpdateSubject};