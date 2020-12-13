import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Teacher } from '../Model/teacher';
import { TeacherserService } from '../services/teacherser.service';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  teacher : Teacher =new Teacher ();
  constructor(private teacherser:TeacherserService ,private router:Router) { }

  AddTeacher(){
    this.teacher.image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs_F5PQxtwk4BDJ1R5GLdvOcVN93yyKzhvMQ&usqp=CAU"
    this.teacherser.AddTeacher(this.teacher).subscribe(res => this.router.navigate(['teacher']));
  }
  
  teacherForm : FormGroup;
  ngOnInit(): void {
    this.teacherForm = new FormGroup({
      firstname: new  FormControl('',Validators.required),
      lastname: new  FormControl('',Validators.required),
      matiere: new  FormControl('',Validators.required),
      email: new  FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      phone: new FormControl(this.teacher.phone,[Validators.required,Validators.pattern('[0-9]{8}')])
     
    })
  }

}
