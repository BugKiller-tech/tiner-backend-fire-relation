const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const schema = new Schema(
  {
    firebaseUserId: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true
  }
)

module.export = mongoose.model('User', schema);