"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapAsync = exports.wrapValidator = void 0;
const wrapValidator = (func) => (req, _res, next) => {
    func(req).then(() => next()).catch(next);
};
exports.wrapValidator = wrapValidator;
const wrapAsync = (func) => (req, res, next) => {
    func(req, res, next).catch(next);
};
exports.wrapAsync = wrapAsync;
//# sourceMappingURL=wrapper.js.map