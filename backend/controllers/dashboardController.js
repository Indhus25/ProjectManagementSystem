const Project = require("../models/Project");
const Task = require("../models/Task");

const getDashboardStats = async (req, res) => {
  try {
    const totalProjects = await Project.count({
      where: {
        user_id: req.user.id
      }
    });

    const totalTasks = await Task.count({
      where: {
        user_id: req.user.id
      }
    });

    const completedTasks = await Task.count({
      where: {
        user_id: req.user.id,
        status: "Completed"
      }
    });

    const pendingTasks = await Task.count({
      where: {
        user_id: req.user.id,
        status: "Pending"
      }
    });

    const projectsInProgress = await Project.count({
      where: {
        user_id: req.user.id,
        status: "In Progress"
      }
    });

    res.json({
      totalProjects,
      totalTasks,
      completedTasks,
      pendingTasks,
      projectsInProgress
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  getDashboardStats
};