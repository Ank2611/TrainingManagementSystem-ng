import { ClassesData } from './classesData';
import { UserNotificationData } from './userNotificationData';

export class NotificationData{
    id: number;
    subject: string;
    contents: string;
    classesDtos: ClassesData[]=[];
    userNotificationDtoList: UserNotificationData[]=[];
    userNotificationDtoList1: UserNotificationData[]=[];
}