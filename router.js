const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');



router.get('/',userController.main);
router.get('/about',userController.about);
router.get('/register',userController.register);




module.exports = router;