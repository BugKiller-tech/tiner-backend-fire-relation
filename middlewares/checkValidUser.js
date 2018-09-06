const User = require('../models/User');
module.exports = async(req, res, next) => {
    try {
      console.log(req.body);
      const { firebaseId } = req.body;
      if (!req.body.firebaseId) {
        return res.status(401).json({
          errors: res.__('FIREBASE_ID_REQUIRED')
        })
      }
      const user1 = await User.findOne({ firebaseUserId: firebaseId });
      if (!user1) {
        return res.status(401).json({
          errors: res.__('FIREBASE_ID_REQUIRED')
        })
      }
      next();
    } catch (err) {
      return res.status(400).json({ errors: res.__('SOMETHING_WENT_WRONG') })
    }
  }
