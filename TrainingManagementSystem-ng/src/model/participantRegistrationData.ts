import { UserData} from './userData';
import {CourseData} from './courseData';

export class ParticipantRegistrationData{
    id: number;
    date: Date;
    userDto: UserData = new UserData();
    courseDto: CourseData = new CourseData();
    accepted: boolean;
}