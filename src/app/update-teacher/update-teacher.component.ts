import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Teacher } from '../Model/teacher';
import { TeacherserService } from '../services/teacherser.service';
@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.css']
})
export class UpdateTeacherComponent implements OnInit {
  teacher:Teacher;
  constructor(private teacherser:TeacherserService ,private ActivatedRoute : ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe(res => this.teacherser.GetTeacherById(Number(res.get('id'))).subscribe(res => this.teacher=res));
  }

  Updateteacher(teacher : Teacher):void{
    this.teacherser.Updateteacher(this.teacher.id,teacher).subscribe(res => this.router.navigate(['teacher']));
    
  }

}
