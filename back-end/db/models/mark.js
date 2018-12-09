const mongoose = require('mongoose');

const markSchema = new mongoose.Schema({
  markName: String,
  subName: [String],
  description: String,
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Mark' }],
}, { timestamps: true });

markSchema.toJSON = () => ({
  id: this._id, // eslint-disable-line
  markName: this.markName,
  description: this.description,
  createdAt: this.createdAt,
  products: this.products,
});

module.exports = mongoose.model('Mark', markSchema);
