import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { UserData } from 'src/model/userData';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {
  public user:UserData = new UserData();
  
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  public addUser(): void{
    console.log(this.user);
    this.user.status = true;
    this.user.type = "TEACHER";
    this.userService.addUser(this.user).subscribe(result=>
      { console.log("added");
      this.router.navigateByUrl("admin/teacher-list"); })
  }
}
 