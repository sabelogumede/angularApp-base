import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";
import { EmailService } from "./email.service"

@Component({
  selector: 'courses',

  template: `
    <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>

    <h2>{{ autTitle }}</h2>
    <ul>
      <li *ngFor="let author of authors">
        {{ author }}
      </li>
    </ul>
    `
})
export class CoursesComponent {
  // properties
  title = "List of courses";
  autTitle = "List of authors";
  courses;
  authors;

//  Logic for calling an HTTP Service with Dipendency Injection
  constructor(coursesService: CoursesService, autService: EmailService){
    // let service = new CoursesService();
    this.courses = coursesService.getCourses();
    this.authors = autService.getAuthors();
  }



}
