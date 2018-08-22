const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const schema = new Schema(
  {
    title: {
      type: String
    },
    category: String,
    description: String,
    price: Number,
    ownerId: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    imageUrl1: String,
    imageUrl2: String,
    imageUrl3: String,
    imageUrl4: String,
    selled: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true
  }
)

module.export = mongoose.model('Thing', schema);