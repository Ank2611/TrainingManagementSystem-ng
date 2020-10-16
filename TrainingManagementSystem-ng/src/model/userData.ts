import { UserNotificationData } from "./userNotificationData";
import { ParticipantRegistrationData} from "./participantRegistrationData";

export class UserData {
    id: number;
    userName: string;
    password: string;
    type: string;
    firstName: string;
    lastName: string;
    status: boolean;
    participantRegistrationDtos: ParticipantRegistrationData[]=[];
    userNotificationDto: UserNotificationData;
}