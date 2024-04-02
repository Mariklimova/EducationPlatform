import express, { Request, Response } from 'express';
import { createUser, authorizUser } from '../service/api.service';
import { iUser } from '../interfaces/interface';
import { buildResponse } from '../helper/buildResponse';
import { createToken } from '../helper/jwt';

const route = express.Router();

route.post('/reg', async (req: Request, res: Response):Promise<void> => {
  try {
    const { name, surname, email, pwd } = req.body;
    const data: iUser[] = await createUser(name, surname, email, pwd);
    buildResponse(200, data, res);
  } catch (error: any) {
    buildResponse(400, error.message, res);
  }
});

route.post('/auth', async (req: Request, res: Response):Promise<void> => {
  try {
    const { email, pwd } = req.body;
    const data: iUser[] = await authorizUser(email, pwd);
    const token: string = createToken(data);
    buildResponse(200, token, res);
  } catch (error: any) {
    buildResponse(400, error.message, res);
  }
});

export default route;
