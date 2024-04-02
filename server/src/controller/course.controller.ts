import express, { Request, Response } from 'express';
import { createCourse, getAllCourse, updateCourse, getCourseById, deleteCourse, partUpdateCourse } from '../service/course.service';
import { iCourse } from '../interfaces/interface';
import { buildResponse } from '../helper/buildResponse';

const route = express.Router();

route.post('/', async (req: Request, res: Response) => {
  try {
    const { course, description } = req.body;
    const data: iCourse[] = await createCourse(course, description);
    buildResponse(200, data, res);
  } catch (error: any) {
    buildResponse(400, error.message, res);
  }
});

route.get('/', async (_req: Request, res: Response) => {
  try {
    const data: iCourse[] = await getAllCourse();
    buildResponse(200, data, res);
  } catch (error: any) {
    buildResponse(400, error.message, res);
  }
});

route.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data: iCourse[] = await getCourseById(id);
    buildResponse(200, data, res);
  } catch (error: any) {
    buildResponse(400, error.message, res);
  }
});

route.put('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { course, description } = req.body;
    const data: iCourse[] = await updateCourse(id, course, description);
    buildResponse(200, data, res);
  } catch (error: any) {
    buildResponse(400, error.message, res);
  }
});

route.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data: iCourse[] = await deleteCourse(id);
    buildResponse(200, data, res);
  } catch (error: any) {
    buildResponse(400, error.message, res);
  }
});

route.patch('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const body: iCourse = req.body;
    const data: iCourse[] = await partUpdateCourse(id, body);
    buildResponse(200, data, res);
  } catch (error: any) {
    buildResponse(400, error.message, res);
  }
});

export default route;
