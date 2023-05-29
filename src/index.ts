import express, { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// Define User model and database operations (you'll need to replace this with your own database implementation)
class User {
  constructor(public username: string, public password: string) {}
}

class UserDatabase {
  private users: User[] = [];

  public async addUser(user: User): Promise<void> {
    this.users.push(user);
  }

  public async getUser(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}

const userDatabase = new UserDatabase();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Error handler middleware
const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal server error" });
};

// Register route
app.post(
  "/register",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username, password } = req.body;

      // Check if the username is already taken
      const existingUser = await userDatabase.getUser(username);
      if (existingUser) {
        res.status(409).json({ error: "Username is already taken" });
        return;
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user
      const newUser = new User(username, hashedPassword);

      // Store the user in the database
      await userDatabase.addUser(newUser);

      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      next(error);
    }
  }
);

// Login route
app.post("/login", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, password } = req.body;

    // Retrieve user from the database
    const storedUser = await userDatabase.getUser(username);

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

    // Create a JWT token
    const token = jwt.sign(
      { username: storedUser.username },
      process.env.JWT_SECRET!,
      {
        expiresIn: "1h" // Set the token expiration time
      }
    );

    res.json({ token });
  } catch (error) {
    next(error);
  }
});

// 404 route handler
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ error: "Not found" });
});

// Error handling middleware
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
