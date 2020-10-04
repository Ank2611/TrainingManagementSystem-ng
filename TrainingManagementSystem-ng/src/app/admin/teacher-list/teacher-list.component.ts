import { Component, OnInit } from '@angular/core';
import { UserData } from "../../../model/userData";
import { UserService } from "../../service/user.service";
@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
  users: UserData[] = [];
  type: string = 'TEACHER';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsersByType(this.type).subscribe(received => {
      this.users = received;
    });
    //   this.userService.getUsers().subscribe(received => {
    //        this.users = received});
  }

  delete(id: Number) {
    if (confirm("Are you sure you want to delete this?")) {
      this.userService.deleteUser(id).subscribe(result => {
        this.ngOnInit();
      });
    }
  }
}
