const User = require('../models/User');
const Thing = require('../models/Thing');

module.exports = {
  register: async (req, res) => {
    const { firebaseId } = req.body;
    try {
      const user = await User.findOne({ firebaseUserId: firebaseId });
      if (user) {
        return res.json({ message: res.__('ALREADY_REGISTERED_USER') })
      }

      const user1 = await User.create({ firebaseUserId: firebaseId });
      if (user1) {
        return res.json({ message: res.__('USER_REGISTERED_SUCCESS') })
      }
      res.status(400).json({ errors: res.__('USER_REGISTER_FAILED') });
    } catch(err) {
      console.log(err);
      res.status(400).json({ errors: res.__('USER_REGISTER_FAILED') });
    }
  },


  updateSetting: async (req, res) => {
    const { firebaseId } = req.body;
    try {
      const user = await User.findOne({ firebaseUserId: firebaseId });
      if (!user) {
        return res.json({ message: res.__('CAN_NOT_FIND_USER') })
      }

      user.category = req.body.category;
      user.radius = req.body.radius;
      user.minPrice = req.body.minPrice;
      user.maxPrice = req.body.maxPrice;
      await user.save();
      return res.json({ message: 'success' })
    } catch(err) {
      console.log(err);
      res.status(400).json({ errors: res.__('USER_REGISTER_FAILED') });
    }
  }

  
}