
const request = {
    
    validateRequestDto: (requestBody, requestDto) => {
        for(let field in requestBody){
            if(requestDto[field] === undefined)
                return false;
            
            if(!requestDto[field]["allowNull"] && (requestBody[field] === null))
                return false;

            if(requestDto[field]["type"] !== typeof(requestBody[field]))
                return false;
        }
        return true;
    }
}

module.exports = request;