import { Request, Response, NextFunction } from "express";

class AuthenticateUser

export async function authenticateUser (req: Request, res: Response, next: NextFunction) {
    try {
        
        next();
    } catch (error) {
        next(error)
    }
}