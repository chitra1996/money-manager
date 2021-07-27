import { Request, Response, NextFunction } from 'express';

export function ValidateCategory(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const errorObj = {
      error: true,
      message: '',
    };

    if (!req.body) errorObj.message = 'Request is soulful but without body :(';
    if (!req.body.budget)
      errorObj.message = 'Please give me budget amount to proceed :(';
    if (!req.body.category_name)
      errorObj.message = 'Please give me a name of the category :(';

    if (errorObj.message) {
      return res.status(400).json(errorObj);
    }

    next();
  } catch (error) {
    next(error);
  }
}
