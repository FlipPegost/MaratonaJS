const { getMessage } = require('../helpers/messages')


const TYPE_JSON = 'application/json';
const STATUS_CODE_OK = 200;
const STATUS_CODE_BAD_REQUEST = 400;
const STATUS_CODE_UNAUTHORIZED = 401;
const STATUS_CODE_NOT_FOUND = 404;
const STATUS_CODE_SERVER_INTERNAL_ERROR = 500;
const STATUS_CODE_NO_CONTENT = 204;
const jsonOK  = function(data,message,metadata) {
    const status = STATUS_CODE_OK;
    message = (message) ? message : getMessage('response.json_ok');
    metadata = (metadata) ? metadata : { };
    
    
    
    this.status(status);
    this.type(TYPE_JSON);

    return this.json({message, data, metadata, status: status});
}
const jsonBadRequest  = function(data,message,metadata) {
    const status = STATUS_CODE_BAD_REQUEST;
    message = (message) ? message : getMessage('response.json_bad_request');
    metadata = (metadata) ? metadata : { };
    
    
    
    this.status(status);
    this.type(TYPE_JSON);

    return this.json({message, data, metadata, status: status});
}
const jsonNoContent  = function(data,message,metadata) {
    const status =STATUS_CODE_NO_CONTENT;
    message = (message) ? message : getMessage('response.json_no_content');
    metadata = (metadata) ? metadata : { };
    
    this.status(status);
    this.type(TYPE_JSON);

    return this.json({message, data, metadata, status: status});
}
const jsonUnauthorized  = function(data,message,metadata) {
    const status = STATUS_CODE_UNAUTHORIZED;
    message = (message) ? message : getMessage('response.json_unauthorized');
    metadata = (metadata) ? metadata : { };
    
    
    
    this.status(status);
    this.type(TYPE_JSON);

    return this.json({message, data, metadata, status: status});
}
const jsonNotFound  = function(data,message,metadata) {
    const status = STATUS_CODE_NOT_FOUND;
    message = (message) ? message : getMessage('response.json_not_found');
    metadata = (metadata) ? metadata : { };
    
    
    
    this.status(status);
    this.type(TYPE_JSON);

    return this.json({message, data, metadata, status: status});
}

const jsonServerInternalError  = function(data,message,metadata) {
    const status = STATUS_CODE_SERVER_INTERNAL_ERROR;
    message = (message) ? message : getMessage('response.json_ok');
    metadata = (metadata) ? metadata : { };
    
    
    
    this.status(status);
    this.type(TYPE_JSON);

    return this.json({message, data, metadata, status: status});
}



const response = (req,res,next) => {
    res.jsonOK = jsonOK;
    res.jsonBadRequest = jsonBadRequest;
    res.jsonNotFound = jsonNotFound;
    res.jsonUnauthorized = jsonUnauthorized
    res.jsonServerInternalError = jsonServerInternalError
    res.jsonNoContent = jsonNoContent
    next();
};

module.exports = response