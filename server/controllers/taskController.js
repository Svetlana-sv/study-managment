const { Task } = require('../models/model');
const ApiError = require('../error/ApiError');

class TaskController {
  async getTasks(req, res) {
    const task = await Task.findAll();
    return res.json(task);
  }

  async getOneTask(req, res) {
    const { task_id } = req.params;
    if (!task_id) {
      return next(ApiError.badRequest('ID не задан'));
    }
    const task = await Task.findOne({
      where: { task_id },
    });
    return res.json(task);
  }

  async createTask(req, res, next) {
    try {
      const { task_name, task_description, task_date, task_date_end } = req.body;
      const task = await Task.create({ task_name, task_description, task_date, task_date_end });
      return res.json(task);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async deleteTask(req, res, next) {
    try {
      const { task_id } = req.params;
      await Task.destroy({
        where: { task_id },
      });
      return res.json('Задание удалено!');
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new TaskController();
