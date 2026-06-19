const Task = require("../models/Task");

const createTask = async (req, res) => {
  try {
    const {
      task_name,
      description,
      priority,
      status,
      due_date,
      project_id
    } = req.body;

    const task = await Task.create({
      task_name,
      description,
      priority,
      status,
      due_date,
      project_id,
      user_id: req.user.id
    });

    res.status(201).json({
      message: "Task Created Successfully",
      task
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({
      where: {
        user_id: req.user.id
      }
    });

    res.status(200).json(tasks);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const getTaskById = async (req, res) => {
  try {
    const task = await Task.findOne({
      where: {
        id: req.params.id,
        user_id: req.user.id
      }
    });

    if (!task) {
      return res.status(404).json({
        message: "Task Not Found"
      });
    }

    res.status(200).json(task);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const updateTask = async (req, res) => {
  try {
    const task = await Task.findOne({
      where: {
        id: req.params.id,
        user_id: req.user.id
      }
    });

    if (!task) {
      return res.status(404).json({
        message: "Task Not Found"
      });
    }

    await task.update(req.body);

    res.status(200).json({
      message: "Task Updated Successfully",
      task
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOne({
      where: {
        id: req.params.id,
        user_id: req.user.id
      }
    });

    if (!task) {
      return res.status(404).json({
        message: "Task Not Found"
      });
    }

    await task.destroy();

    res.status(200).json({
      message: "Task Deleted Successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask
};