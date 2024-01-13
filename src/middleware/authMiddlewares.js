const jwt = require("jsonwebtoken");
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const User = prisma.user;

async function checkToken(req, res, next) {

    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if(!token) {
        return res.status(401).send("No token provided");
    }

    try{
 
        const secret = process.env.JWT_SECRET
        const id = jwt.decode(token, secret)

        const user = await User.findUnique({
            where: {
                id: id.id
            }
        });
        if(user == null){
            return res.status(404).send("User not found");
        }
        
        next();

    }catch(error){
        return res.status(403).send("Invalid token");
    }
}

module.exports = { checkToken };