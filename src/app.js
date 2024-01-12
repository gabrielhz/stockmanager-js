const express = require('express');
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const bcrypt = require('bcrypt')
const app = express();
const port = 3030;

app.use(express.json());

const getAllUsers = async function() {
    const allUsers = await prisma.user.findMany()
    return allUsers
};

app.get('/', async (req, res) => {
    const users = await getAllUsers();
    res.json(users);
});

app.post('/auth/register', async (req, res) => {
   try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = await prisma.user.create({
            data: {
                first_name: req.body.name,
                email: req.body.email,
                password: hashedPassword
            }
        });
        res.json(user.first_name);
    } catch {
        res.status(500).send();
    }
});

app.post('/auth/login', async (req, res) => {

        const user = await prisma.user.findUnique({
            where: {
                email: req.body.email
            }
        });
        if(user == null){
            return res.status(404).send("User not found");
        }
        try{
            if(bcrypt.compareSync(req.body.password, user.password)){
                res.json(user.first_name);
            } else {
                res.status(401).send("Invalid password");
            }

        } catch {
            res.status(500).send();
        }
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
