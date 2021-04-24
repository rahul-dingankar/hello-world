import {Component} from '@angular/core';
import { CoursesService } from 'src/courses.service';

@Component({
    selector:'courses',
    template:'<h2 *ngFor="let course of courses">{{"Title: "+course}}</h2>' 
})

export class CoursesComponent{
    title = "List of courses";
    courses;

    constructor(service: CoursesService){
        
        this.courses = service.getCourses();
    }
}