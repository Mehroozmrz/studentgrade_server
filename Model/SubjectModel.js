const mongoose = require("mongoose");

const SubjectSchema = new mongoose.Schema(
  {
    subject_name: {
      type: String,
    },
  
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("mst_subject", SubjectSchema);
