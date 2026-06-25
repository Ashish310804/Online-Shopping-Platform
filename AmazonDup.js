const express = require('express');
const mongoose = require('mongoose');
const app = express();
mongoose.connect('mongodb://localhost:27017/AmazonDup', { useNewUrlParser: true, useUnifiedTopology: true });
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    rating: Number
});
const Product = mongoose.model('Product', productSchema);
app.get('/api/products', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});
app.listen(3000, () => console.log('Server running on port 3000'));