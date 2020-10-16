import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { UserData } from 'src/model/userData';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: UserData=new UserData();
  constructor(private activeRoute: ActivatedRoute, private userService: UserService,
    private route: Router) { }

  ngOnInit(): void {
    let id = this.activeRoute.snapshot.paramMap.get("id");
    console.log('id '+id);
    this.userService.getUser(Number(id)).subscribe(userUesult=>{
      this.user=userUesult;
    })
  }

  updateUser(): void{
    console.log(this.user);
    this.userService.updateUser(this.user).subscribe(updUser=>{
      this.user=updUser;
      this.route.navigateByUrl("admin/teacher-list");
    })
   
  }

}
