const {model, Schema} = require('mongoose');

const NewWorkSchema = Schema(
  {
    name: {
      type: String,
      required: [true, 'The name field is required'],
      unique: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
    },
    img: {type: String}
  }
)

module.exports = model("NewWork", NewWorkSchema)