import { ClassesData } from './classesData';
import { UserNotificationData } from './userNotificationData';

export class NotificationData{
    id: number;
    subject: string;
    contents: string;
    classesList: ClassesData[];
    readUserNotification: UserNotificationData[];
    unreadUserNotification: UserNotificationData[];
}