import { NotificationData } from "./notificationData";
import { UserData } from './userData';

export class UserNotificationData{
    id: number;
    readNotificationDtoList: NotificationData[];
    unreadNotificationDtoList: NotificationData[];
    user: UserData;
}