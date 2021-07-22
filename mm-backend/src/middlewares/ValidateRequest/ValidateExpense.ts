import { Request, Response, NextFunction } from "express";

export function ValidateExpense(req: Request, res: Response, next: NextFunction) {
    try {
        const errorObj = {
            error: true,
            message: ""
        };

        if(!req.body) errorObj.message = "Request is soulful but without body :(";
        if(!req.body.description) errorObj.message = "Please give me some description to proceed :(";
        if(!req.body.classification) errorObj.message = "I have no idea about the classification :(";
        if(!req.body.category_id) errorObj.message = "I don't know which category is it! :(";
        if(!req.body.amount) errorObj.message = "What are you managing? :O What is the amount? :(";

        if(errorObj.message) {
            return res.status(400).json(errorObj);
        }

        next();
    } catch (error) {
        next(error)
    }
}