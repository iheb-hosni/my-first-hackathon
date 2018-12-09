const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: String,
  description: String,
  mark: String,
  picture: String,
  price: Number,
}, { timestamps: true });

productSchema.toJSON = () => ({
  id: this._id, // eslint-disable-line
  productName: this.firstName,
  description: this.description,
  picture: this.picture,
  price: this.price,
  createdAt: this.createdAt,
});

module.exports = mongoose.model('Product', productSchema);
