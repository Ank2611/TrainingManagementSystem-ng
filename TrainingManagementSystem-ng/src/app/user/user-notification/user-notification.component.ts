import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassUnitService } from 'src/app/service/class-unit.service';
import { ClassesService } from 'src/app/service/classes.service';
import { NotificationService } from "src/app/service/notification.service";
import { UserNotificationService } from 'src/app/service/user-notification.service';
import { UserService } from 'src/app/service/user.service';
import { NotificationData } from 'src/model/notificationData';
import { UserData } from 'src/model/userData';

@Component({
  selector: 'app-user-notification',
  templateUrl: './user-notification.component.html',
  styleUrls: ['./user-notification.component.css']
})
export class UserNotificationComponent implements OnInit {
  notificationData: NotificationData;
  readNotificationData: NotificationData[]=[];
  unreadNotificationData: NotificationData[]=[];
  user: UserData=new UserData();
  isDivVisible=false;

  constructor(private userService: UserService ,private classUnitService: ClassUnitService, private classesService: ClassesService,
    private notificationService: NotificationService, 
    private userNotificatioService: UserNotificationService ,private route: ActivatedRoute) { }
    
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id");
    console.log("id user " + id);
    this.userService.getUser(Number(id)).subscribe(userresult=>{
      this.user=userresult;
    })
    this.notificationService.getAllUnreadNotification(Number(id)).subscribe(unreadlist=>{
      this.unreadNotificationData=unreadlist;
    })
    this.notificationService.getAllReadNotification(Number(id)).subscribe(readlist=>{
      this.readNotificationData=readlist;
    })
  }

  showDiv(id: Number): void{
    this.isDivVisible=true;
    // this.userNotificatioService.unreadToReadNotification()
  }

}
