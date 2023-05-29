import express, { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { IUser } from "../express/users/interface";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Middleware to handle registration
const registerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user: IUser = req.body;

    // Check if the username is already taken (you'll need to replace this with your own database check)
    const existingUser = await getUserByUsername(user.name);
    if (existingUser) {
      res.status(409).json({ error: "Username is already taken" });
      return;
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(user.password, 10);

    // Create a new user
    const newUser: IUser = {
      name: user.name,
      password: hashedPassword,
      country: user.country,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      age: user.age,
      gender: user.gender,
      fitnessProfile: user.fitnessProfile
    };

    // Store the user in the database (you'll need to replace this with your own database logic)
    await saveUser(newUser);

    req.body = newUser; // Attach the user object to the request for further processing
    next();
  } catch (error) {
    next(error);
  }
};

// Middleware to handle login
const loginMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, password } = req.body;

    // Retrieve user from the database (you'll need to replace this with your own database logic)
    const storedUser = await getUserByUsername(name);

    if (!storedUser) {
      res.status(401).json({ error: "Invalid username or password" });
      return;
    }

    // Compare the provided password with the stored hashed password
    const passwordMatch = await bcrypt.compare(password, storedUser.password);

    if (!passwordMatch) {
      res.status(401).json({ error: "Invalid username or password" });
      return;
    }

    req.body = storedUser; // Attach the user object to the request for further processing
    next();
  } catch (error) {
    next(error);
  }
};

// Route to register a user
app.post("/register", registerMiddleware, (req: Request, res: Response) => {
  res
    .status(201)
    .json({ message: "User registered successfully", user: req.body });
});

// Route to login
app.post("/login", loginMiddleware, (req: Request, res: Response) => {
  // Create a JWT token
  const token = jwt.sign({ name: req.body.name }, process.env.JWT_SECRET!, {
    expiresIn: "1h" // Set the token expiration time
  });

  res.json({ message: "Logged in successfully", token });
});

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Dummy functions for database operations (replace them with your own database logic)

function getUserByUsername(username: string): Promise<IUser | null> {
  return Promise.resolve(null);
}

function saveUser(user: IUser): Promise<void> {
  return Promise.resolve();
}
