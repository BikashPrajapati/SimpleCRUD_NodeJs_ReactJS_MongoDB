const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./src/config/db");

const app = express();

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

const authRoutes = require("./src/routes/auth.routes");

// after middleware
app.use("/api/auth", authRoutes);

const projectRoutes = require("./src/routes/project.routes");

app.use("/api/projects", projectRoutes);



// const Profile = require("./src/models/Profile");

// const testInsert = async () => {
//   const profileExists = await Profile.findOne();
//   if (!profileExists) {
//     await Profile.create({
//       name: "Bikash Prajapati",
//       title: "Full Stack Developer",
//       bio: "Learning MERN stack 🚀",
//       email: "bkaz0797@gmail.com",
//       location: "Nepal",
//     });
//     console.log("Profile created");
//   }
// };

// testInsert();

// const bcrypt = require("bcryptjs");
// const Admin = require("./src/models/Admin");

// const createAdmin = async () => {
//   const adminExists = await Admin.findOne({ email: "admin@gmail.com" });
//   if (!adminExists) {
//     const hashedPassword = await bcrypt.hash("admin123", 10);

//     await Admin.create({
//       name: "Admin",
//       email: "admin@email.com",
//       passwordHash: hashedPassword,
//     });

//     console.log("Admin created ✅");
//   }
// };

// createAdmin();

