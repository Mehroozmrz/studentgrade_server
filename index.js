const express = require("express");
const dbConnection = require("./db");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config(); // Load environment variables

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "https://studentgrade-frontend.vercel.app",
    // credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Specify allowed headers
  })
);

dbConnection();

const PORT = process.env.PORT || 5000;

app.use("/api/student", require("./Route/studentRoute"));
app.use("/api/subject", require("./Route/subjectRoute"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
