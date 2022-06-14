import { Request, Response } from 'express'
import CreateCourseService from './CreateCourseService'

export function createCourse(resquest: Request, response: Response) {
    CreateCourseService.execute({
        name: "node", 
        duration: 10, 
        educator: "silvatech"
    })

    CreateCourseService.execute({
        name: "node", 
        educator: "silvatech"
    });
    return response.send();
}
