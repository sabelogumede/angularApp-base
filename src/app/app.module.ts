// NG built in library
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// components
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
// service
import { CoursesService } from './courses.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule
  ],
  // providers: [
  //   CoursesService
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
