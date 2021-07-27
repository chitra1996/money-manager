import { Request, Response, NextFunction } from 'express';

export function ValidateUser(req: Request, res: Response, next: NextFunction) {
  try {
    const errorObj = {
      error: true,
      message: '',
    };

    if (!req.body) errorObj.message = 'Request is soulful but without body :(';
    if (!req.body.name)
      errorObj.message = 'Please give me user name to proceed :(';
    if (!req.body.email)
      errorObj.message = 'Please give me user email to proceed :(';
    if (!req.body.phone)
      errorObj.message = 'Please give me user phone number to proceed :(';
    if (!req.body.password)
      errorObj.message = 'Please give me password to proceed :(';

    if (errorObj.message) {
      return res.status(400).json(errorObj);
    }

    next();
  } catch (error) {
    next(error);
  }
}
