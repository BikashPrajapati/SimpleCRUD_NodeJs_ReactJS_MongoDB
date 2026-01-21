const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth.middleware");

const {
  createProject,
  getProjects,
  updateProject,
  deleteProject,
} = require("../controllers/project.controller");

// Public route
router.get("/", getProjects);

// // Public – get all projects
// router.get("/public", getProjects);


// Protected routes
router.post("/", protect, createProject);
router.put("/:id", protect, updateProject);
router.delete("/:id", protect, deleteProject);

module.exports = router;
