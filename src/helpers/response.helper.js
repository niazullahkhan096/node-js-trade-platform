const response = {

    formatResponse: (
        statusCode,
        message,
        data = {}) => {
        return {
            'status': statusCode,
            'message': message,
            'data': data
        }
    }
}

module.exports = response;