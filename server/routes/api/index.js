const router = require('express').Router();
//might be using this? might not?
// const userRoutes = require('./user-routes');

router.use('/users', userRoutes);

module.exports = router;