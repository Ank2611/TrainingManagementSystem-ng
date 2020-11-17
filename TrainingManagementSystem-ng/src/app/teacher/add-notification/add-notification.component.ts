import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common/";
import { ClassesService } from 'src/app/service/classes.service';
import { NotificationService } from 'src/app/service/notification.service';
import { ClassesData } from 'src/model/classesData';
import { NotificationData } from 'src/model/notificationData';

@Component({
  selector: 'app-add-notification',
  templateUrl: './add-notification.component.html',
  styleUrls: ['./add-notification.component.css']
})
export class AddNotificationComponent implements OnInit {
  notification :NotificationData = new NotificationData();
  notifications: NotificationData[]=[];
  classes: ClassesData=new ClassesData();

  constructor(private notificationService: NotificationService, 
      private classesService: ClassesService,private route: ActivatedRoute,
      private location: Location) { }

  ngOnInit(): void {
    let idClasses= this.route.snapshot.paramMap.get("id");
    console.log('id classes ' + idClasses);
    this.classesService.getClassesById(Number(idClasses)).subscribe(result=>{
      this.classes=result;
    })
  }

  sendNotification(): void{
    let idClasses= this.route.snapshot.paramMap.get("id");
    console.log('id classes ' + idClasses);
    this.notificationService.addNewNotificationToClasses(this.notification,Number(idClasses)).subscribe(newNotif=>{
      console.log("add notif");
    })
    this.location.back();
  }

}
