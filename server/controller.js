module.exports = {
  getInventory: (req, res) => {
    const db = req.app.get('db')
    db.get_inventory()
    .then(products => res.status(200).send(products))
    .catch(err => res.status(500).send(err))
  },
  addProduct: (req, res) => {
    const {product} = req.body
    const db = req.app.get('db')
    db.create_product({item: product.name, price: product.price, image: product.image})
    .then(products => res.status(200).send(products))
    .catch(err => res.status(500).send(err))
  }
}