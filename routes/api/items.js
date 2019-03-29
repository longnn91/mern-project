const ItemModel  = require('../../models/Item.model');
const express = require('express');
const router = express.Router();

/*
@route POST api/items
@desc Add a new Item
@access Public
*/
router.post('/', (req, res) => {
  const itemData = {
    name: req.body.name
  }
  const newItem = new ItemModel(itemData);
  newItem.save()
  .then(item => res.json(item))
  .catch(err => console.log(err));
});

/*
@route GET api/items
@desc Get list Item
@access Public
*/
router.get('/', (req, res) => {
  ItemModel.find()
  .sort({date: -1})
  .then(items => res.json(items))
  .catch((err) => res.json(err));
});

/*
@route Delete api/items/:id
@desc Delete an Item
@access Public
*/
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
  .then(item => item.remove().then(() => res.json({success: true})))
  .catch((err) => res.status(404).json({success: false}));
});

module.exports = router;
