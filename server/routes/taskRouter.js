const Router = require('express');
const router = new Router();
const taskConroller = require('../controllers/taskController');

router.post('/createTask', taskConroller.createTask);
router.get('/getTask/:task_id', taskConroller.getOneTask);
router.get('/getTasks', taskConroller.getTasks);
router.delete('/deleteTask/:task_id', taskConroller.deleteTask);
module.exports = router;
