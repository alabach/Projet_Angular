import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Eleve } from '../Model/Eleve';
import { EleveSerService } from '../services/eleve-ser.service';

@Component({
  selector: 'app-eleve',
  templateUrl: './eleve.component.html',
  styleUrls: ['./eleve.component.css']
})
export class EleveComponent implements OnInit {

   eleve : Eleve [] ;
   headers = ["photo","ID", "First Name", "Last Name", "Phone parent", "NB absent","Action"];
  constructor(private _EleveSerService:EleveSerService,private route:Router) { }

  ngOnInit(): void {
    this._EleveSerService.GetAllEleve().subscribe(data => this.eleve=data);
  }

  getAllEleve() : void{
    this._EleveSerService.GetAllEleve().subscribe((data)  => { this.eleve = data})

   
 }
 Delete_Eleve(id:number)
  {
     this._EleveSerService.DeleteEleve(id).subscribe(data=>this._EleveSerService.GetAllEleve().subscribe(data=>this.eleve=data));
  }

  AddAbsent(id: number){
    for (let i of this.eleve) {
      if (i.id === id) {
        this._EleveSerService.AddAbsent(i).subscribe(data => this._EleveSerService.GetAllEleve().subscribe(data => this.eleve = data));
      }
    }
      
    }

    
}
