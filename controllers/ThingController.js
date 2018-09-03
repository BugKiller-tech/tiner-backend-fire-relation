const User = require('../models/User');
const Thing = require('../models/Thing');

module.exports = {
  register: async (req, res) => {
    const { firebaseId, title, category, price, description, imageUrl1, imageUrl2, imageUrl3, imageUrl4 } = req.body;
    console.log('~~######## body', req.body);
    try {
      const user = await User.findOne({ firebaseUserId: firebaseId });
      if (!user) {
        return res.status.json({ errors: res.__('CAN_NOT_FIND_USER') })
      }

      const thing1 = await Thing.create({ 
        title,
        category,
        description,
        price,
        user: user._id,
        imageUrl1,
        imageUrl2,
        imageUrl3,
        imageUrl4,
      });
      if (thing1) {
        return res.json({ 
          message: res.__('THING_REGISTERED_SUCCESS'),
          thing: thing1
        })
      }
      res.status(400).json({ errors: res.__('THING_REGISTER_FAILED') });
    } catch(err) {
      console.log('item register error', err);
      res.status(400).json({ errors: res.__('THING_REGISTER_FAILED') });
    }
  },

  getMyThings: async (req, res) => {
    try {
      const user1 = await User.findOne({ firebaseUserId: req.body.firebaseId });
      const things = await Thing.find({ user: user1._id, selled: false }).lean()
      .sort({ createdAt: -1 }).limit(100);
      return res.json({
        things
      })      
      
    } catch (err) {
      return res.status(400).json({ errors: res.__('SOMETHING_WENT_WRONG') })
    }
  },

  getAllThings: async (req, res) => {
    try {
      const user1 = await User.findOne({ firebaseUserId: req.body.firebaseId });
      const things = await Thing.find({ user: { $ne: user1._id }, selled: false }).lean()
      .sort({ createdAt: -1 }).limit(1000);
      return res.json({
        things
      })      
      
    } catch (err) {
      return res.status(400).json({ errors: res.__('SOMETHING_WENT_WRONG') })
    }
  }

}