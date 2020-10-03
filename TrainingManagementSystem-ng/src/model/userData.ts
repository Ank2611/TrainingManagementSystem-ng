import { UserNotificationData } from "./userNotificationData";
import { ParticipantRegistrationData} from "./participantRegistrationData";

export class UserData {
    id: number;
    userName: string;
    password: string;
    type: string;
    firstName: string;
    lastName: string;
    isActive: boolean;
    participantRegistration: ParticipantRegistrationData;
    userNotification: UserNotificationData;
}