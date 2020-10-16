import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassUnitService } from 'src/app/service/class-unit.service';
import { ClassUnitData } from 'src/model/classUnitData';

@Component({
  selector: 'app-edit-class-unit',
  templateUrl: './edit-class-unit.component.html',
  styleUrls: ['./edit-class-unit.component.css']
})
export class EditClassUnitComponent implements OnInit {
  classUnit: ClassUnitData = new ClassUnitData();
  constructor(private activatedRoute: ActivatedRoute, private classUnitService: ClassUnitService,
    private route: Router) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log('id' + id);
    this.classUnitService.getClassUnit(Number(id)).subscribe(classunitresult => {
      this.classUnit = classunitresult;
    })

  }

  updateClassUnit(): void{
    this.classUnitService.updateClassUnit(this.classUnit).subscribe(result=>{
      this.classUnit=result;
      this.route.navigateByUrl("admin/class-unit-list");
    })
  
  }

}
