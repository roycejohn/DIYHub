import Project from "../models/ProjectModel.js";
import cloudinary from "../config/cloudinaryConfig.js";


export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createProject = async (req, res) => {
  try {
    const { title, description, materials } = req.body;
    let steps = req.body.steps;
    let coverImageUrl = '';

    console.log('Request Body:', req.body);
    console.log('Request Files:', req.files);

    if (req.files && req.files.length > 0) {
      const coverImageFile = req.files.find(file => file.fieldname === 'coverImage');
      if (coverImageFile) {
        const result = await cloudinary.uploader.upload(coverImageFile.path);
        coverImageUrl = result.secure_url;
        console.log('Cover Image URL:', coverImageUrl);
      }
    }

    if (typeof steps === 'string') {
      steps = JSON.parse(steps);
    }

    const projectSteps = steps.map((step, index) => {
      const stepImages = req.files
        .filter(file => file.fieldname.startsWith(`steps[${index}][images]`))
        .map(file => file.path);
      return { ...step, images: stepImages };
    });

    const newProject = new Project({
      title,
      description,
      coverImage: coverImageUrl,
      materials,
      steps: projectSteps,
    });

    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    console.error("Error creating project:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};