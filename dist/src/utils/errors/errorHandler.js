"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
const joi_1 = require("joi");
const errors_1 = require("./errors");
const errorMiddleware = (error, _req, res, next) => {
    if (error instanceof joi_1.ValidationError) {
        res.status(400).send({
            type: error.name,
            message: error.message,
        });
        console.log(`${error.name} was thrown with status 400 and message ${error.message}`);
    }
    else if (error instanceof errors_1.ApplicationError) {
        res.status(error.status).send({
            type: error.name,
            message: error.message,
        });
        console.log(`${error.name} was thrown with status ${error.status} and message ${error.message}`);
    }
    else {
        res.status(500).send({
            type: error.name,
            message: error.message,
        });
        console.log(`${error.name} was thrown with status 500 and message ${error.message}`);
    }
    next(error);
};
exports.errorMiddleware = errorMiddleware;
//# sourceMappingURL=errorHandler.js.map