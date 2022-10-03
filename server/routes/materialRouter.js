const Router = require('express');
const router = new Router();
const materialConroller = require('../controllers/materialController');

router.post('/createMaterial' , materialConroller.createMaterial);
router.get('/getMaterials',materialConroller.getMaterials);
router.get('/getMaterial/:material_id',materialConroller.getOneMaterial)
router.delete('/deleteMaterial/:material_id', materialConroller.deleteMaterial)

module.exports = router;