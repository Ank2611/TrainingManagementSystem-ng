import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeacherListComponent } from "./admin/teacher-list/teacher-list.component";
import { AdminComponent } from './admin/admin.component';
import { AddTeacherComponent } from './admin/add-teacher/add-teacher.component';
import { CourseListComponent } from './admin/course-list/course-list.component';
import { EditCourseComponent } from './admin/edit-course/edit-course.component';
import { ClassUnitListComponent } from './admin/class-unit-list/class-unit-list.component';
import { EditClassUnitComponent } from './admin/edit-class-unit/edit-class-unit.component';

const routes: Routes = [

  {path:'', component: HomeComponent},
  {path:'admin', component:AdminComponent},
  {path:'admin/teacher-list', component: TeacherListComponent},
  {path:'admin/add-teacher', component:AddTeacherComponent},
  {path:'admin/course-list', component:CourseListComponent},
  {path:'edit-course/:id', component:EditCourseComponent},
  {path:'admin/class-unit-list', component:ClassUnitListComponent},
  {path:'edit-class-unit/:id', component: EditClassUnitComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }