require("dotenv").config();
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");
const { newUser, checkEmail } = require('../models/userModels');
const User = prisma.user;



async function checkPassword(pass1, pass2) {
    checkPassword = await bcrypt.compare(pass1, pass2);

    if(!checkPassword){
        return false;
    } else {
        return true;
    }
}
async function hashPassword(password){
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword
}

async function createUser(name, email, password) {
    const hashedPassword = await hashPassword(password)
    resultEmail = await checkEmail(email);
    if (resultEmail == null){
        newUser(name, email, hashedPassword)
        return true
    } else {
        return false
    }
}

function createToken(id){
    try{

        const secret = process.env.JWT_SECRET;

        const token = jwt.sign(
            {
            id: id
            }, 
            secret,
            {
                expiresIn: '15m'
            }
        );
        return token
    } catch { 
        const error = new Error("Internal error");
        error.statusCode = 500;
        throw error;
    }
}

module.exports = { hashPassword, createToken, createUser, checkPassword};