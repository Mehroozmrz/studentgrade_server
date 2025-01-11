const StudentSchema=require('../Model/StudentModel')



const StudentInsert=async(req,res)=>{
    try{
        console.log(req.body,'insert')
        const {rollNo,studentName,subject,studentGrade}=req.body;
        console.log(studentName)

        const remark = studentGrade >= 75 ? "PASS" : "FAIL";
        const StudentInfo=new StudentSchema({roll_no:rollNo,student_name:studentName,subject_key:subject ,grade:studentGrade,remark});
        const StudentSaved=await StudentInfo.save();
        res.send(StudentSaved);
    }catch(error){
        console.log(error.message);
        res.status(500).send("Internal some error occured");
    }
}

const GetStudent = async (req, res) => {
    try {
        const StudentInfo= await StudentSchema.find().populate("subject_key");
        console.log(StudentInfo)
        res.send(StudentInfo);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error occurred");
    }
}



const DeleteStudent =  async (req, res)=> {
    try{
        let StudentInfo = await StudentSchema.findById(req.params.id);
        if (!StudentInfo) {
            return res.status(404).send("Not Found");
        }
        StudentInfo = await StudentSchema.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Student deleted successfully", Category : StudentInfo });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Some Error ouccured");
    }
}


const UpdateCategory =  async (req,res)=>{
    try{

        const {name}=req.body;
        // const img=req.file.filename;

        const newCategory = {};
        if (name) { newCategory.title = name };
        if (req.file) { newCategory.image = req.file.filename };
    
        let newData = await StudentSchema.findById(req.params.id);
        if (!newData) {
            return res.status(404).send("Not Found");
        }

        // console.log(newCategory,'newCategory')

        newData = await StudentSchema.findByIdAndUpdate(req.params.id,{
        $set: newCategory }, { new: true })
        res.json({ newData});

    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Some Error ouccured");
    }
}




module.exports={StudentInsert,GetStudent,DeleteStudent,UpdateCategory};