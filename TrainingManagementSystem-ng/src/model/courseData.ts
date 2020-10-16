import { ClassUnitData } from './classUnitData';
import {  ParticipantRegistrationData } from './participantRegistrationData';

export class CourseData{
    id: number;
    name: string;
    classUnitDtoList: ClassUnitData[]=[];
    participantRegistrationDtos: ParticipantRegistrationData[]=[];
}