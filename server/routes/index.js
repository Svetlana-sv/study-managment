const Router = require('express');
const taskRouter = require('./taskRouter');
const materialRouter = require('./materialRouter');

const router = new Router();

router.use('/task', taskRouter)
router.use('/material', materialRouter)

module.exports = router;