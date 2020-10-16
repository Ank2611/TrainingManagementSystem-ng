import { ClassUnitData } from './classUnitData';
import { NotificationData } from './notificationData';

export class ClassesData{
    id: number;
    subject: string;
    date: Date;
    classUnitDto: ClassUnitData;
    notificationDtoList: NotificationData[];
}