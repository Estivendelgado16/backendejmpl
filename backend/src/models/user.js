const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
  age: { type: Number, min: 0 }
}, { timestamps: true });

module.exports = model('User', userSchema);
