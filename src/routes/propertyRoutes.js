const express = require('express');
const router = express.Router();
const { checkToken } = require('../middleware/authMiddlewares');
const { createProperty } = require ('../controllers/propertyController')
router.post('/add', checkToken, async (req, res) => {
    const property = await createProperty(req.body.code, req.body.acquisition, req.body.status, req.body.item, req.body.manufacturer)
    if (property) {
        res.status(201).send('Property sucessfully added');
    } else {
        res.status(409).send('Invalid input or property already exists');
    }

})


module.exports = router;