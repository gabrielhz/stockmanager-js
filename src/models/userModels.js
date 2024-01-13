const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const User = prisma.user;



async function newUser(name, email, password){
    await User.create({
        data: {
            first_name: name,
            email: email,
            password: password
        }
    });
}
async function checkID(id) {
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
    if(user){
        return user
    } else {
        return null
    }
}
async function checkEmail(email){
    
    const user = await User.findUnique({
        where: {
            email: email
        }
    });
    if(user){
        return user
    } else {
        return null
    }
}

module.exports = { checkEmail, newUser, checkID};