module.exports = {
  getInventory: (req, res) => {
    const db = req.app.get('db')
    db.get_inventory()
    .then(products => res.status(200).send(products))
    .catch(err => res.status(500).send(err))
  },
  addProduct: (req, res) => {
    const {item_name, price, image} = req.body.newProduct
    const db = req.app.get('db')
    db.create_product([item_name, price, image])
    .then(products => res.status(200).send(products))
    .catch(err => {
      console.log(err)
      res.status(500).send(err)})
  },
  deleteProduct: (req, res) => {
    const {id} = req.params;
    const db = req.app.get('db')
    
    db.delete_product(id)
    .then(products => res.status(200).send(products))
    .catch(err => {
      console.log('This is an error')
      res.status(500).send(err)
    })
  }
}