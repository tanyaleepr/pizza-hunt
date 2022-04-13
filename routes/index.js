const router = require('express').Router();
const apiRoutes = require('./api');
const htmlRoutes = require('./html/html-routes');
const commentRoutes = require('./comment-routes');
const pizzaRoutes = require('./pizza-routes');

router.use('/api', apiRoutes);
router.use('/', htmlRoutes);
router.use('/comments', commentRoutes);
router.use('/pizzas', pizzaRoutes);

router.use((req, res) => {
  res.status(404).send('<h1>😝 404 Error!</h1>');
});

module.exports = router;
