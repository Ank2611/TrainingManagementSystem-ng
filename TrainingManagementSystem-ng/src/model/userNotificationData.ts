import { NotificationData } from "./notificationData";
import { UserData } from './userData';

export class UserNotificationData{
    id: number;
    userNotificationDtoList: NotificationData[]=[];
    userNotificationDtoList1: NotificationData[]=[];
    userDto: UserData=new UserData();
}