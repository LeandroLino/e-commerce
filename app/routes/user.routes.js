module.exports = (app) => {
	const product = require('../controllers/user/user.controller.js');

	var router = require('express').Router();

	router.post('/register', product.create);

	app.use('/api', router);
};
