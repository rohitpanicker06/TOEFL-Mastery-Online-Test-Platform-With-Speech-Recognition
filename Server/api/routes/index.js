const router = require('express').Router();
const userRouter = require('./user-routes');

// route to '/'
router.use('/', userRouter);

module.exports = router;