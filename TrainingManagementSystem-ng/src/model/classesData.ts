import { ClassUnitData } from './classUnitData';
import { NotificationData } from './notificationData';

export class ClassesData{
    id: number;
    name: string;
    date: Date;
    classUnit: ClassUnitData;
    notifications: NotificationData[];
}