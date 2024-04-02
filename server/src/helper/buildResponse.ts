import { Response } from 'express';
import { iCourse, iUser } from '../interfaces/interface';
type messageType = iCourse | iCourse[] | iUser | iUser[] | string;

function buildResponse(status: number, message: messageType, res: Response): void {
  res.status(status);
  res.send(message);
}

export { buildResponse };
