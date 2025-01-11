const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    roll_no: {
      type: Number,
    },
    student_name: {
      type: String,
    },
  
    subject_key: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "mst_subject",
    },
    grade: {
      type: String,
    },
    remark: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("mst_student", StudentSchema);
