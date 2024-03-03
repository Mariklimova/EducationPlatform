import express, {Request, Response}from 'express';
import {createUserApi,authorizUser} from '../service/api.service'
import { iUser } from '../interfaces/interface';


const route = express.Router();

route.post('/reg',async (req:Request,res:Response)=> {
  try {
    const {name, surname, email, pwd} = req.body;
    const data:iUser[] = await createUserApi(name,surname,email,pwd);
    res.status(200).send(data)
  } catch (error:any) {
    res.status(200).send(error.message)
  }  
})

route.post('/auth',async (req:Request,res:Response) => {
  try {
    const{email} = req.body;
    const data:iUser[] = await authorizUser(email)
    res.status(200).send(data)
  } catch (error:any) {
    res.status(200).send(error.message)
  }
})

export default route