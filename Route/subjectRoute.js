const express=require('express');
const router=express.Router();

const {SubjectInsert,GetSubject,UpdateSubject,DeleteSubject} = require('../Controller/SubjectController');

router.post('/subjectInsert',SubjectInsert);
router.get('/getSubject',GetSubject);
router.put('/updateSubject/:id',UpdateSubject);
router.delete('/deleteSubject/:id',DeleteSubject);

module.exports=router;