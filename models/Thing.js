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
    // ownerId: String,  // firebaseid
    user: {  // user collection _id
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


    likes: {
      type: [{
        type: Schema.Types.ObjectId,
        ref: 'Thing'
      }]
    },
    dislikes: {
      type: [{
        type: Schema.Types.ObjectId,
        ref: 'Thing'
      }]
    }

  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Thing', schema);