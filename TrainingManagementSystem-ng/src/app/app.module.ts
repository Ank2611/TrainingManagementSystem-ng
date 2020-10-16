import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import {FormsModule} from '@angular/forms'

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { MatInputModule, } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatListModule } from "@angular/material/list";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDatepickerModule } from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatRadioModule } from "@angular/material/radio";
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TeacherListComponent } from './admin/teacher-list/teacher-list.component';
import { AdminComponent } from './admin/admin.component';
import { AddTeacherComponent } from './admin/add-teacher/add-teacher.component';
import { CourseListComponent } from './admin/course-list/course-list.component';
import { EditCourseComponent } from './admin/edit-course/edit-course.component';
import { ClassUnitListComponent } from './admin/class-unit-list/class-unit-list.component';
import { EditClassUnitComponent } from './admin/edit-class-unit/edit-class-unit.component';
import { EditUserComponent } from './admin/edit-user/edit-user.component';
import { RegistrationListComponent } from './admin/registration-list/registration-list.component';
import { AddRegistrationComponent } from './add-registration/add-registration.component';
import { ClassUnitToCourseComponent } from './admin/class-unit-to-course/class-unit-to-course.component';
import { ClassesToClassUnitComponent } from './admin/classes-to-class-unit/classes-to-class-unit.component';
import { ClassesListComponent } from './admin/classes-list/classes-list.component';
import { EditClassesComponent } from './admin/edit-classes/edit-classes.component';
import { TeacherCoursesComponent } from './teacher/teacher-courses/teacher-courses.component';
import { TeacherComponent } from './teacher/teacher/teacher.component';
import { ClassUnitByCourseComponent } from './teacher/class-unit-by-course/class-unit-by-course.component';
import { ClassesByClassUnitComponent } from './teacher/classes-by-class-unit/classes-by-class-unit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TeacherListComponent,
    AdminComponent,
    AddTeacherComponent,
    CourseListComponent,
    EditCourseComponent,
    ClassUnitListComponent,
    EditClassUnitComponent,
    EditUserComponent,
    RegistrationListComponent,
    AddRegistrationComponent,
    ClassUnitToCourseComponent,
    ClassesToClassUnitComponent,
    ClassesListComponent,
    EditClassesComponent,
    TeacherCoursesComponent,
    TeacherComponent,
    ClassUnitByCourseComponent,
    ClassesByClassUnitComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
