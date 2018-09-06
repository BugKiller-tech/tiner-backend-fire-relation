var express = require('express');
var router = express.Router();
const controller = require('../controllers/UserController');
const { celebrate, Joi } = require('celebrate');
const checkValidUser = require('../middlewares/checkValidUser');



const registerSchema = celebrate({
  body: {
    firebaseId: Joi.string().required().error(new Error('firebaseId is required')),
    name: Joi.string().allow('')
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
const updateLocationSchema = celebrate({
  body: {
    firebaseId: Joi.string().required().error(new Error('firebaseId is required')),
    lat: Joi.number().required(),
    lng: Joi.number().required(),
  }
})



/* GET users listing. */
router.post('/register', registerSchema, controller.register);


router.use(checkValidUser);
router.post('/updateSetting', updateSettingSchema, controller.updateSetting);
router.post('/updateLocation', updateLocationSchema, controller.updateLocation);

module.exports = router;
