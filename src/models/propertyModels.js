const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const Property = prisma.property;

async function newProperty(code, acquisition, status, item, manufacturer){
    await Property.create({
        data : {
            code: code,
            acquisition: acquisition,
            status_id: status,
            item_id: item, 
            manufacturer_id: manufacturer
        }
    });


}

async function checkCode(code) {
    const property = await Property.findUnique({
        where: {
            code: code
        }
    });
    if(property){
        return property
    } else {
        return null
    }
}

module.exports = { newProperty, checkCode};