import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { IUser } from "../express/users/interface";

interface AuthRequest extends Request {
  user?: IUser;
}

const authorize = (req: AuthRequest, res: Response, next: NextFunction) => {
  // Get the token from the request headers
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    // Verify and decode the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      user: IUser;
    };

    // Pass the decoded user data to the next middleware or route handler
    req.body = decoded.user;

    // Move to the next middleware or route handler
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
};
