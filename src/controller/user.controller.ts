import express, { Request, Response } from 'express';
import { createData, getAllUser, getAllUserById, updateUser, deleteUser, partUpdateUser } from '../service/user.service';
import { iUser } from '../interfaces/interface';
import { buildResponse } from '../helper/buildResponse';

const route = express.Router();

route.post('/', async (req: Request, res: Response) => {
  try {
    const { name, surname, email, pwd } = req.body;
    const data: iUser[] = await createData(name, surname, email, pwd);
    buildResponse(200, data, res);
  } catch (error: any) {
    buildResponse(400, error.message, res);
  }
});

route.get('/', async (_req: Request, res: Response) => {
  try {
    const data: iUser[] = await getAllUser();
    buildResponse(200, data, res);
  } catch (error: any) {
    buildResponse(400, error.message, res);
  }
});

route.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data: iUser[] = await getAllUserById(id);
    buildResponse(200, data, res);
  } catch (error: any) {
    buildResponse(400, error.message, res);
  }
});

route.put('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, surname, email, pwd } = req.body;
    const data: iUser[] = await updateUser(id, name, surname, email, pwd);
    buildResponse(200, data, res);
  } catch (error: any) {
    buildResponse(400, error.message, res);
  }
});

route.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data: iUser[] = await deleteUser(id);
    buildResponse(200, data, res);
  } catch (error: any) {
    buildResponse(400, error.message, res);
  }
});

route.patch('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const body: iUser = req.body;
    const data: iUser[] = await partUpdateUser(id, body);
    buildResponse(200, data, res);
  } catch (error: any) {
    buildResponse(400, error.message, res);
  }
});

export default route;
