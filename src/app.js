require("dotenv").config();
const express = require('express');
const app = express();
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");
const port = 3030;
const User = prisma.user

app.use(express.json());

const getAllUsers = async function() {
    const allUsers = await User.findMany()
    return allUsers
};

app.get('/user/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    const user = await User.findUnique({
        where: {
            id: id
        },
        select: {
            id: true,
            email: true,
            first_name: true,
            created_at: true,
            updated_at: true
        }
    });

    if(!user) {
        return res.status(404).send("User not found");
    }

    res.json(user)

});

app.post('/auth/register', async (req, res) => {
   try{
        const user = await User.findUnique({
            where: {
                email: req.body.email
            }
        });
        if(user){
            return res.status(409).send("Email already exists");
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const newUser = await User.create({
            data: {
                first_name: req.body.name,
                email: req.body.email,
                password: hashedPassword
            }
        });
        res.json(newUser.first_name);
    } catch {
        res.status(500).send();
    }
});

app.post('/auth/login', async (req, res) => {

        const user = await User.findUnique({
            where: {
                email: req.body.email
            }
        });
        if(user == null){
            return res.status(404).send("User not found");
        }

        checkPassword = await bcrypt.compare(req.body.password, user.password)

        if(!checkPassword){
            return res.status(401).send("Invalid password");
        }

        try{

            const secret = process.env.JWT_SECRET;

            const token = jwt.sign(
                {
                id: user.id
                }, 
                secret,
            );
            res.status(200).json(token);
        } catch { 
            res.status(500).send();
        }
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
