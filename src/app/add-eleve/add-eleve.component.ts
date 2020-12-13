import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Eleve } from '../Model/Eleve';
import { EleveSerService } from '../services/eleve-ser.service';
@Component({
  selector: 'app-add-eleve',
  templateUrl: './add-eleve.component.html',
  styleUrls: ['./add-eleve.component.css']
})
export class AddEleveComponent implements OnInit {
  eleve : Eleve =new Eleve ();
  constructor(private _EleveSerService:EleveSerService,private router:Router) { }
  AddEleve(){
    this.eleve.img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs_F5PQxtwk4BDJ1R5GLdvOcVN93yyKzhvMQ&usqp=CAU"
    this._EleveSerService.AddEleve(this.eleve).subscribe(res => this.router.navigate(['Eleve']));
  }
  EleveForm : FormGroup;
  ngOnInit(): void {
    this.EleveForm = new FormGroup({
      nom: new  FormControl('',Validators.required),
      prenom: new  FormControl('',Validators.required),
      email: new  FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      phone_parent: new FormControl('', Validators.required)
     
    })
  }

}
