const mongoose = require('mongoose')
const Product = mongoose.model('Product');


module.exports = {
  async index(req, res){
    const { page = 1 } = req.query;
    const products = await Product.paginate({}, {page, limit:10});

    return res.json(products);
  },

  async create(req, res){
    const product = await Product.create(res.body)
    return res.json(product);
  },

  async find(req, res){
    const product = await Product.find(res.params.id);

    return res.json(product);
  },

  async update(req, res){
    const product = await Product.findByIdAndUpdate(res.params.id, res.params.body, {new:true});

    return res.json(product);
  },

  async delete(req, res){
    const product = await Product.findByIdAndDelete(res.params.id, res.params.body);

    return res.send();
  },
}