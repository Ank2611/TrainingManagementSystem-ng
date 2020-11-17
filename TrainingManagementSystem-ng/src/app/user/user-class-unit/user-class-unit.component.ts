import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ClassUnitService } from 'src/app/service/class-unit.service';
import { UserService } from 'src/app/service/user.service';
import { ClassUnitData } from 'src/model/classUnitData';
import { ClassUnitByUserData } from "src/model/classUnitByUserData";
import { UserData } from 'src/model/userData';
import { Location } from "@angular/common";

@Component({
  selector: 'app-user-class-unit',
  templateUrl: './user-class-unit.component.html',
  styleUrls: ['./user-class-unit.component.css']
})
export class UserClassUnitComponent implements OnInit {
  classUnits : ClassUnitData[]=[];
  classUnit : ClassUnitData = new ClassUnitData();
  classUnitByUsers: ClassUnitByUserData[]=[];
  classUnitByUser: ClassUnitByUserData= new ClassUnitByUserData();
  users: UserData[]=[];
  user: UserData = new UserData();

  constructor(private userService: UserService, private classUnitService: ClassUnitService,
        private location: Location, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id");
    console.log("user "+ id);
    this.classUnitService.getAllClassUnitByUser(Number(id)).subscribe(result=>{
      this.classUnitByUsers=result;
    })
    this.userService.getUser(Number(id)).subscribe(userresult=>{
      this.user=userresult;
    })
  }


}
