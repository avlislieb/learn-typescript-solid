interface ICourse {
  name: string;
  duration?: number;
  educator: string;
}

class CreateCourseService {
  execute({ name, duration = 8, educator }: ICourse) {
    console.log("name", name);
    console.log("durationAS", duration);
    console.log("educator", educator);
  }
}

export default new CreateCourseService();
