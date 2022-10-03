const Router = require('express');
const router = new Router();
const taskConroller = require('../controllers/taskController')

router.post('/' )
router.get('/', taskConroller.getTasks)

module.exports = router;