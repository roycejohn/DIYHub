// import express from "express";
// import Project from "../models/ExProject.js";
// import parser from "../config/multerConfig.js";
// import cloudinary from 'cloudinary';

// const router = express.Router();


// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET
// });


// router.get("/", async (req, res) => {
//   try {
//     const projects = await ProjectForm.find();
//     res.json(projects);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // router.post("/create-project", parser.any(), async (req, res) => {
// //   try {
// //     const { title, description, materials, steps } = req.body;
// //     const coverImage = req.file ? req.file.path : "";

// //     const projectSteps = steps.map((step, index) => {
// //       const stepImages = req.files
// //         .filter((file) => file.fieldname.startsWith(`steps[${index}][images]`))
// //         .map((file) => file.path);
// //       return { ...step, images: stepImages };
// //     });

// //     const newProject = new Project({
// //       title,
// //       description,
// //       coverImage,
// //       materials,
// //       steps: projectSteps,
// //     });

// //     const savedProject = await newProject.save();
// //     res.status(201).json(savedProject);
// //   } catch (error) {
// //     console.error("Error creating project:", error);
// //     res
// //       .status(500)
// //       .json({ message: "Internal Server Error", error: error.message });
// //   }
// // });
// router.post("/create-project", parser.any(), async (req, res) => {
//   try {
//     const { title, description, materials } = req.body;
//     let steps = req.body.steps;
//     let coverImageUrl = '';


//     console.log('Request Body:', req.body);
//     console.log('Request Files:', req.files);

//     if (req.files && req.files.length > 0) {
//       const coverImageFile = req.files.find(file => file.fieldname === 'coverImage');
//       if (coverImageFile) {
    
//         const result = await cloudinary.v2.uploader.upload(coverImageFile.path);
//         coverImageUrl = result.secure_url;
//         console.log('Cover Image URL:', coverImageUrl);
//       }
//     }

//     if (typeof steps === 'string') {
//       steps = JSON.parse(steps);
//     }

//     const projectSteps = steps.map((step, index) => {
//       const stepImages = req.files
//         .filter(file => file.fieldname.startsWith(`steps[${index}][images]`))
//         .map(file => file.path);
//       return { ...step, images: stepImages };
//     });

//     const newProject = new Project({
//       title,
//       description,
//       coverImage: coverImageUrl,
//       materials,
//       steps: projectSteps,
//     });

//     const savedProject = await newProject.save();
//     res.status(201).json(savedProject);
//   } catch (error) {
//     console.error("Error creating project:", error);
//     res.status(500).json({ message: "Internal Server Error", error: error.message });
//   }
// });



// export default router;


// routes/exProjectRoutes.js

import express from "express";
import parser from "../config/multerConfig.js";
import { getProjects, createProject } from "../controllers/projectController.js";


const router = express.Router();

router.get("/", getProjects);

router.post("/create-project", parser.any(), createProject);

export default router;

