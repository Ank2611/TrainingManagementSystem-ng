import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassesService } from 'src/app/service/classes.service';
import { ClassesData } from 'src/model/classesData';

@Component({
  selector: 'app-edit-classes',
  templateUrl: './edit-classes.component.html',
  styleUrls: ['./edit-classes.component.css']
})
export class EditClassesComponent implements OnInit {
  classes: ClassesData=new ClassesData();
  constructor(private classesService: ClassesService, private routes: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    let id=this.routes.snapshot.paramMap.get("id");
    this.classesService.getClassesById(Number(id)).subscribe(updClasses=>{
      this.classes=updClasses;
    })
  }

  updateClasses(): void{
    this.classesService.updateClasses(this.classes).subscribe(result=>{
      console.log(this.classes);
      this.router.navigateByUrl("admin/classes-list");
    })
  }

}
