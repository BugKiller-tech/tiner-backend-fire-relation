var express = require('express');
var router = express.Router();
const controller = require('../controllers/UserController');
const { celebrate, Joi } = require('celebrate');
const checkValidUser = require('../middlewares/checkValidUser');



const registerSchema = celebrate({
  body: {
    firebaseId: Joi.string().required().error(new Error('firebaseId is required'))
  }
})

const updateSettingSchema = celebrate({
  body: {
    firebaseId: Joi.string().required().error(new Error('firebaseId is required')),
    category: Joi.string().allow(''),
    radius: Joi.number(),
    minPrice: Joi.number(),
    maxPrice: Joi.number(),
  }
})



router.use(checkValidUser);
/* GET users listing. */
router.post('/register', registerSchema, controller.register);
router.post('/updateSetting', updateSettingSchema, controller.updateSetting);

module.exports = router;
