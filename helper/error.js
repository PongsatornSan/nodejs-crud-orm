class ErrorHandler extends Error {
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}

const handleError = (err, res) => {
    let { statusCode, message } = err;
    if (!statusCode) {
        statusCode = 400
    }
    res.status(statusCode).json({
        message
    });
};

module.exports = {
    ErrorHandler,
    handleError
}