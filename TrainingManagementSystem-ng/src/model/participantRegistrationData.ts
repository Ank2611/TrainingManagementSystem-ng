import { UserData} from './userData';
import {CourseData} from './courseData';

export class ParticipantRegistrationData{
    id: number;
    date: Date;
    userDto: UserData;
    CourseDto: CourseData;
    accepted: boolean;
}