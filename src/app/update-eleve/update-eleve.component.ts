import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Eleve } from '../Model/Eleve';
import { EleveSerService } from '../services/eleve-ser.service';
@Component({
  selector: 'app-update-eleve',
  templateUrl: './update-eleve.component.html',
  styleUrls: ['./update-eleve.component.css']
})
export class UpdateEleveComponent implements OnInit {
  eleve : Eleve  ;
  constructor(private _EleveSerService:EleveSerService,private router:Router,private ActivatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe(res => this._EleveSerService.GetEleveById(Number(res.get('id'))).subscribe(res => this.eleve=res));
  }

  UpdateEleve(eleve : Eleve):void{
    this._EleveSerService.UpdateEleve(this.eleve.id,eleve).subscribe(res => this.router.navigate(['Eleve']));
    
  }

}
