const {getMessage} = require('./messages')


const getValidatorError = (error, messagePath) =>{
    if (!error) return null;
    
    const errorMessages = {};

    error.details.map( (detail) => {
        const message = detail.message;
        const type = detail.type;
        const key = detail.context.key;
        const path = `${messagePath}.${key}.${type}`;
        
        console.log('path',path);
        
        const customNMessage = getMessage(path)
        if(!customNMessage) {
            console.log('customMessage not found for path: ',path);
        }

        errorMessages[key] = getMessage(path) || message ;
    });
    
    return  errorMessages
}

module.exports = {getValidatorError, getMessage}