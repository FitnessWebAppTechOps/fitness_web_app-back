"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}
class UserDatabase {
    constructor() {
        this.users = [];
    }
    async addUser(user) {
        this.users.push(user);
    }
    async getUser(username) {
        return this.users.find((user) => user.username === username);
    }
}
const userDatabase = new UserDatabase();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Internal server error" });
};
app.post("/register", async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const existingUser = await userDatabase.getUser(username);
        if (existingUser) {
            res.status(409).json({ error: "Username is already taken" });
            return;
        }
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        const newUser = new User(username, hashedPassword);
        await userDatabase.addUser(newUser);
        res.status(201).json({ message: "User registered successfully" });
    }
    catch (error) {
        next(error);
    }
});
app.post("/login", async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const storedUser = await userDatabase.getUser(username);
        if (!storedUser) {
            res.status(401).json({ error: "Invalid username or password" });
            return;
        }
        const passwordMatch = await bcrypt_1.default.compare(password, storedUser.password);
        if (!passwordMatch) {
            res.status(401).json({ error: "Invalid username or password" });
            return;
        }
        const token = jsonwebtoken_1.default.sign({ username: storedUser.username }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });
        res.json({ token });
    }
    catch (error) {
        next(error);
    }
});
app.use((req, res, next) => {
    res.status(404).json({ error: "Not found" });
});
app.use(errorHandler);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map