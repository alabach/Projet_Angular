import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher } from '../Model/teacher';
import { TeacherserService } from '../services/teacherser.service';
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
	
   teacher:Teacher[];
   firstname:string;

  constructor(private teacherser:TeacherserService,private route:Router) {
   
   }

  ngOnInit(): void {
    this.teacherser.GetAllTeacher().subscribe(data => this.teacher=data);
    this.firstname="";
  }

  getAllUsers() : void{
    this.teacherser.GetTeacher().subscribe(data  => this.teacher = data)
 }

  Delete_Teacher(id:number)
  {
     this.teacherser.DeleteTeacher(id).subscribe(data=>this.teacherser.GetAllTeacher().subscribe(data=>this.teacher=data));
  }

  
}
