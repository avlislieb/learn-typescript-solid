

interface Course {
    name: string,
    duration?: number, 
    educator: string
}

class CreateCourseService {

    execute({ name, duration = 8, educator }: Course) {
        console.log('name', name)
        console.log('durationAS', duration)
        console.log('educator', educator)
    }
}

export default new CreateCourseService()