const express = require('express');
const router = express.Router();
const { checkToken } = require('../middleware/authMiddlewares');
const { checkID } = require('../models/userModels')

router.get('/:id', checkToken, async (req, res) => {
  const id = parseInt(req.params.id);

  const user = await checkID(id);
    console.log(user)
  if(!user) {
      return res.status(404).send("User not found");
  }

  return res.json(user)

});

module.exports = router;