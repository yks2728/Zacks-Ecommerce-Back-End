const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');
const sequelize = require('../../config/connection');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll()
    .then((dbTagData) => res.json(dbTagData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "tag_name",
      [
        sequelize.literal(

        )
      ]
    ]
  })
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  Tag.create(req.body)
});

router.put('/:id', (req, res) => {
  Tag.update(
    {
      tag_name: req.body.tag_name,
    },
    {
      where: {
        id: req.params.id
      },
    }
  )
  .then((dbTagData) => {
    if (!dbTagData) {
      res.status(404).json({ message: "no tag found with this id" });
      return;
    }
    res.json(dbTagData);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    },
  })
    .then((dbTagData) => {
      if (!dbTagData) {
        res.status(404).json({ message: "no post found with this id" });
        return;
      }
      res.json(dbTagData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
