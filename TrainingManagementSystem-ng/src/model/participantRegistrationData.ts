import { UserData} from './userData';
import {CourseData} from './courseData';

export class ParticipantRegistrationData{
    id: number;
    date: Date;
    user: UserData;
    course: CourseData;
    accepted: boolean;
}