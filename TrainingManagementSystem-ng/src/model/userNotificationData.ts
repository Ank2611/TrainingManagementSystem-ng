import { NotificationData } from "./notificationData";
import { UserData } from './userData';

export class UserNotificationData{
    id: number;
    readNotificationList: NotificationData[];
    unreadNotificationList: NotificationData[];
    user: UserData;
}