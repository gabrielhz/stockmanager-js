const { newProperty, checkCode } = require('../models/propertyModels')

const createProperty = async (code, acquisition, status, item, manufacturer) => {
    const property = await checkCode(code);

    const [day, month, year] = acquisition.split('/');
    const date = new Date(`${year}-${month}-${day}`);
    const isoAcquisition = date.toISOString();


    if (!property){
        newProperty(code, isoAcquisition, status, item, manufacturer)
        return true
    } else {
        return null
    }
}

module.exports = { createProperty };