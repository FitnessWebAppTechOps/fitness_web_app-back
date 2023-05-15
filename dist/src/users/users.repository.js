"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
const users_model_1 = require("./users.model");
class UsersRepository {
    static createUser(username, password, country, email, name, age, gender, fitnessProfile) {
        return users_model_1.UserModel.create({
            username,
            password,
            country,
            email,
            name,
            age,
            gender,
            fitnessProfile,
        });
    }
    static getAllUsers() {
        return users_model_1.UserModel.find().exec();
    }
    static getUserById(userId) {
        return users_model_1.UserModel.findOne({ _id: userId }).exec();
    }
    static getUserByCountry(country) {
        return users_model_1.UserModel.findOne({ country: country }).exec();
    }
    static getUserByAge(age) {
        return users_model_1.UserModel.findOne({ age: age }).exec();
    }
    static getUserByGender(gender) {
        return users_model_1.UserModel.findOne({ gender: gender }).exec();
    }
    static deleteUserById(userId) {
        return users_model_1.UserModel.findOneAndDelete({ _id: userId }).exec();
    }
    static updateUserDetailsById(userId, country, name, age, gender, fitnessProfile) {
        return users_model_1.UserModel.findByIdAndUpdate(userId, { country, name, age, gender, fitnessProfile }, {
            new: true,
        }).exec();
    }
    static updateUserFitnessProfileById(userId, fitnessProfile) {
        return users_model_1.UserModel.findByIdAndUpdate(userId, { fitnessProfile }, {
            new: true,
        }).exec();
    }
}
exports.UsersRepository = UsersRepository;
//# sourceMappingURL=users.repository.js.map