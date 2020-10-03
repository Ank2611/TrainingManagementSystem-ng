import { ClassUnitData } from './classUnitData';
import {  ParticipantRegistrationData } from './participantRegistrationData';

export class CourseData{
    id: number;
    name: string;
    classUnitList: ClassUnitData[];
    participantRegistration: ParticipantRegistrationData;
}