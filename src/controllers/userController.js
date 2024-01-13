const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const User = prisma.user;

const getAllUsers = async function() {
  const allUsers = await User.findMany()
  return allUsers
};

module.exports = { getAllUsers };