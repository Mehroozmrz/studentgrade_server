const express=require('express');
const router=express.Router();

const {StudentInsert,GetStudent,DeleteStudent} = require('../Controller/StudentController');

router.post('/studentInsert',StudentInsert);
router.get('/getStudent',GetStudent);
router.delete('/deleteStudent/:id',DeleteStudent);

module.exports=router;