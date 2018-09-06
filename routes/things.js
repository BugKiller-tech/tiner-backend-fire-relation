var express = require('express');
var router = express.Router();
const controller = require('../controllers/ThingController');
const { celebrate, Joi } = require('celebrate');
const checkValidUser = require('../middlewares/checkValidUser');



const registerSchema = celebrate({
  body: {
    firebaseId: Joi.string().required().error(new Error('FIREBASE_ID_REQUIRED')),
    title: Joi.string().required().error(new Error('MISSED_PARAMETER')),
    category: Joi.string().required().error(new Error('MISSED_PARAMETER')),
    price: Joi.number().required().error(new Error('MISSED_PARAMETER')),
    description: Joi.string().required().error(new Error('MISSED_PARAMETER')),
    imageUrl1: Joi.string().allow(''),
    imageUrl2: Joi.string().allow(''),
    imageUrl3: Joi.string().allow(''),
    imageUrl4: Joi.string().allow(''),

  }
})

const getAvailableSchema = celebrate({
  body: {
    firebaseId: Joi.string().required().error(new Error('FIREBASE_ID_REQUIRED')),
  }
})

const getAllThingsSchema = celebrate({
  body: {
    firebaseId: Joi.string().required().error(new Error('FIREBASE_ID_REQUIRED')),
  }
})

const getCandidateThingsSchema = celebrate({
  body: {
    firebaseId: Joi.string().required().error(new Error('FIREBASE_ID_REQUIRED')),
  }
})

router.use(checkValidUser);
/* GET users listing. */
router.post('/register', registerSchema, controller.register);
router.post('/getMyThings', getAvailableSchema, controller.getMyThings);
router.post('/getAllThings', getAllThingsSchema, controller.getAllThings);
router.post('/getCandidateThings', getCandidateThingsSchema, controller.getCandidateThings);


module.exports = router;
