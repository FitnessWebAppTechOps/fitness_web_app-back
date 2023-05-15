"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateRequest = void 0;
const wrapper_1 = require("./wrapper");
const defaultValidationOptions = {
    abortEarly: false,
    allowUnknown: false,
    convert: true,
};
const normalizeRequest = (req, value) => {
    req.originalBody = req.body;
    req.body = value.body;
    req.originalQuery = req.query;
    req.query = value.query;
    req.originalParams = req.params;
    req.params = value.params;
};
const ValidateRequest = (schema, options = defaultValidationOptions) => {
    const validator = async (req) => {
        const { error, value } = schema.unknown().validate(req, options);
        if (error) {
            throw error;
        }
        if (options.convert) {
            normalizeRequest(req, value);
        }
    };
    return (0, wrapper_1.wrapValidator)(validator);
};
exports.ValidateRequest = ValidateRequest;
//# sourceMappingURL=joi.js.map