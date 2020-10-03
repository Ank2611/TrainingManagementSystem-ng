import { CourseData } from "./courseData";
import { ClassesData } from "./classesData";

export class ClassUnitData{
    id: number;
    name: string;
    courses: CourseData[];
    classesList: ClassesData;
}