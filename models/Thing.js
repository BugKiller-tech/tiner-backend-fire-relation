const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const schema = new Schema(
  {

  },
  {
    timestamps: true
  }
)

module.export = mongoose.model('Thing', schema);