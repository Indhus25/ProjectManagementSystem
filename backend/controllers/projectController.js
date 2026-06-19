const Project = require("../models/Project");

const createProject = async (req, res) => {
  try {
    const {
      project_name,
      description,
      status,
      start_date,
      end_date
    } = req.body;

    const project = await Project.create({
      project_name,
      description,
      status,
      start_date,
      end_date,
      user_id: req.user.id
    });

    res.status(201).json({
      message: "Project Created Successfully",
      project
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll({
      where: {
        user_id: req.user.id
      }
    });

    res.status(200).json(projects);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
const getProjectById = async (req, res) => {
  try {
    const project = await Project.findOne({
      where: {
        id: req.params.id,
        user_id: req.user.id
      }
    });

    if (!project) {
      return res.status(404).json({
        message: "Project Not Found"
      });
    }

    res.status(200).json(project);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
const updateProject = async (req, res) => {
  try {
    const project = await Project.findOne({
      where: {
        id: req.params.id,
        user_id: req.user.id
      }
    });

    if (!project) {
      return res.status(404).json({
        message: "Project Not Found"
      });
    }

    await project.update(req.body);

    res.status(200).json({
      message: "Project Updated Successfully",
      project
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
const deleteProject = async (req, res) => {
  try {
    const project = await Project.findOne({
      where: {
        id: req.params.id,
        user_id: req.user.id
      }
    });

    if (!project) {
      return res.status(404).json({
        message: "Project Not Found"
      });
    }

    await project.destroy();

    res.status(200).json({
      message: "Project Deleted Successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
module.exports = {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject
};