const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const schema = new Schema(
  {
    firebaseUserId: {
      type: String,
      required: true,
    },
    category: { type: String, default: "" },
    radius: { type: Number, default: 30 },
    minPrice: { type: Number, default: 0 },
    maxPrice: { type: Number, default: 30000 },
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('User', schema);