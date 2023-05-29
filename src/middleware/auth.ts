import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const authorizeUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization!.split(" ")[1];
    const decode = jwt.verify(token, process.env.JWT_SECRET!);
    req.body.user = decode;
    next();
  } catch (err) {
    return res.json("Invalid request!");
  }
};
