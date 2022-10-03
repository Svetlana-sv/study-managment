const { Material } = require('../models/model');
const ApiError = require('../error/ApiError');

class MaterialController {
  async getMaterials(req, res) {
    // return res.json('getTasks');
    const material = await Material.findAll();
    return res.json(material);
  }

  async getOneMaterial(req, res) {
    // return res.json('getOneTask');
    const { material_id } = req.params;
    if (!material_id) {
      return next(ApiError.badRequest('ID не задан'));
    }
    const material = await Material.findOne({
      where: { material_id },
    });
    return res.json(material);
  }

  async createMaterial(req, res) {
    try {
      const { material_name, material_link, material_description, material_date } = req.body;
      const material = await Material.create({
        material_name,
        material_link,
        material_description,
        material_date,
      });
      return res.json(material);
    } catch (error) {
      next(ApiError.badRequest(e.message));
    }
  }

  async deleteMaterial(req, res, next) {
    try {
      const { material_id } = req.params;
      await Material.destroy({
        where: { material_id },
      });
      return res.json('Материал удален!');
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new MaterialController();
