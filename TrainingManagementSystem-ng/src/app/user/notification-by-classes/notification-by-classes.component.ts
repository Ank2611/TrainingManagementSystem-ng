import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/service/notification.service';
import { NotificationByClassesData } from 'src/model/notificationByClassesData';
import { NotificationData } from "../../../model/notificationData";
import { Location } from "@angular/common";
import { ClassesData } from 'src/model/classesData';
import { ClassesService } from 'src/app/service/classes.service';

@Component({
  selector: 'app-notification-by-classes',
  templateUrl: './notification-by-classes.component.html',
  styleUrls: ['./notification-by-classes.component.css']
})
export class NotificationByClassesComponent implements OnInit {
  notification: NotificationData = new NotificationData();
  notifications: NotificationData[] = [];
  notificationByClasses: NotificationByClassesData = new NotificationByClassesData();
  notificationByClassesList: NotificationByClassesData[] = [];
  classes: ClassesData = new ClassesData();

  constructor(private notificationService: NotificationService, private classesService: ClassesService,
    private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    let idClasses = this.route.snapshot.paramMap.get("id");
    this.notificationService.getAllNotificationByClasses(Number(idClasses)).subscribe(result => {
      this.notificationByClassesList = result;
    })
    this.classesService.getClassesById(Number(idClasses)).subscribe(result => {
      this.classes = result;
    })
  }

  goBack(): void {
    this.location.back();
  }
}
