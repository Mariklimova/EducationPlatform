import express, { Request, Response } from 'express';
import { createCourse, getAllCourse, updateCourse } from '../service/course.service';
import { iCourse } from '../interfaces/interface';


const route = express.Router();

route.post('/', async (req: Request, res: Response) => {
    try {
        const { course, description } = req.body;
        const data: iCourse[] = await createCourse(course, description)
        res.status(200).send(data)
    } catch (error: any) {
        res.status(400).send(error.message)
    }
})

route.get('/', async (_req: Request, res: Response) => {
    try {
        const data: iCourse[] = await getAllCourse()
        res.status(200).send(data)
    } catch (error: any) {
        res.status(400).send(error.message)
    }
})

route.put('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { course, description } = req.body;
        const data: iCourse[] = await updateCourse(id, course, description)
        res.status(200).send(data)
    } catch (error: any) {
        res.status(400).send(error.message)
    }
})





export default route