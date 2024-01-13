const express = require('express');
const router = express.Router();
const { createToken } = require('../controllers/authController');
const { createUser, checkPassword } = require('../controllers/authController')
const { checkEmail } = require('../models/userModels')

router.post('/register', async (req, res) => {
  try{
      createdUser = await createUser(req.body.name, req.body.email, req.body.password)
      if (createdUser == true) {
          return res.json(req.body.name);
      } else {
        return res.status(409).send("Email already exists")
      }
  
   } catch {
       return res.status(500).send();
   }
});


router.post('/login', async (req, res) => {
    const user = await checkEmail(req.body.email);
    if(!user){
      return res.status(401).send("Invalid email");
    } else {
      checkedPassword = await checkPassword(req.body.password, user.password)

      if(checkedPassword == true){
        const token = createToken(user.id)
        return res.status(200).send({token});
          
      } else {
        return res.status(401).send("Invalid password");
      }
    }
});

module.exports = router;