import express, { Request, Response } from 'express';
import { createData, getAllUser, getAllUserById, updateUser, deleteUser, partUpdateUser } from '../service/user.service';
import { iUser } from '../interfaces/interface';

const route = express.Router();

route.post('/', async (req: Request, res: Response) => {
  try {
    const { name, surname, email, pwd } = req.body;
    const data: iUser[] = await createData(name, surname, email, pwd);
    res.status(200).send(data);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});

route.get('/', async (_req: Request, res: Response) => {
  try {
    const data: iUser[] = await getAllUser();
    res.status(200).send(data);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});

route.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data: iUser[] = await getAllUserById(id);
    res.status(200).send(data);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});

route.put('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, surname, email, pwd } = req.body;
    const data: iUser[] = await updateUser(id, name, surname, email, pwd);
    res.status(200).send(data);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});

route.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data: iUser[] = await deleteUser(id);
    res.status(200).send(data);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});

route.patch('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const body: iUser = req.body;
    const data: iUser[] = await partUpdateUser(id, body);
    res.status(200).send(data);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});

export default route;
