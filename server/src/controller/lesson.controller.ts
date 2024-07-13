import express, { Request, Response } from 'express';
import { createLesson, getAllLessons, updateLesson, getLessonByCourse, deleteLesson, partUpdateLesson } from '../service/lesson.service';
import { buildResponse } from '../helper/buildResponse';

const route = express.Router();

route.post('/',async(req:Request,res:Response)=>{
    try {
       const {title, course_id} = req.body;
      const data = await createLesson(title,course_id)
       buildResponse(200,data,res) 
    } catch (error:any) {
        buildResponse(400, error.message, res); 
    }
});

route.get('/', async (_req: Request, res: Response) => {
    try {
      const data = await getAllLessons();
      buildResponse(200, data, res);
    } catch (error: any) {
      buildResponse(400, error.message, res);
    }
  });
  
  route.get('/:course_id', async (req: Request, res: Response) => {
    try {
      const {course_id } = req.params;
      const data = await getLessonByCourse(course_id);
      buildResponse(200, data, res);
    } catch (error: any) {
      buildResponse(400, error.message, res);
    }
  });
  
  route.put('/:id', async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { title, course_id } = req.body;
      const data = await updateLesson(id, title, course_id);
      buildResponse(200, data, res);
    } catch (error: any) {
      buildResponse(400, error.message, res);
    }
  });
  
  route.delete('/:id', async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const data = await deleteLesson(id);
      buildResponse(200, data, res);
    } catch (error: any) {
      buildResponse(400, error.message, res);
    }
  });
  
  route.patch('/:id', async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const data = await partUpdateLesson(id, body);
      buildResponse(200, data, res);
    } catch (error: any) {
      buildResponse(400, error.message, res);
    }
  });

export default route;