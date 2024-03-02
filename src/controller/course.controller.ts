import express, { Request, Response } from 'express';
import { createCourse, getAllCourse, updateCourse, getCourseById, deleteCourse, partUpdateCourse } from '../service/course.service';
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

route.get('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const data: iCourse[] = await getCourseById(id)
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

route.delete('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const data: iCourse[] = await deleteCourse(id)
        res.status(200).send(data)
    } catch (error: any) {
        res.status(400).send(error.message)
    }
})

route.patch('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const body: iCourse = req.body;
        const data: iCourse[] = await partUpdateCourse(id, body)
        res.status(200).send(data)
    } catch (error: any) {
        res.status(400).send(error.message)
    }
})



export default route