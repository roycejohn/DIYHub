import express from "express";
import Project from "../models/ExProject.js";
import parser from "../config/multerConfig.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const projects = await ProjectForm.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/create-project", parser.any(), async (req, res) => {
  try {
    const { title, description, materials, steps } = req.body;
    const coverImage = req.file ? req.file.path : "";

    const projectSteps = steps.map((step, index) => {
      const stepImages = req.files
        .filter((file) => file.fieldname.startsWith(`steps[${index}][images]`))
        .map((file) => file.path);
      return { ...step, images: stepImages };
    });

    const newProject = new Project({
      title,
      description,
      coverImage,
      materials,
      steps: projectSteps,
    });

    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    console.error("Error creating project:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

export default router;
