var express = require('express');
var router = express.Router();
const { celebrate, Joi } = require('celebrate');

const registerSchema = celebrate({
  body: {
    id: Joi.string().required().error(new Error('id is required'))
  }
})


/* GET users listing. */
router.post('/register', registerSchema, (req, res, next) => {
    
});

module.exports = router;
