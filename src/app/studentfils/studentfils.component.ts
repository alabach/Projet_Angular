import { Component, OnInit,Input,Output } from '@angular/core';
import { Eleve } from '../Model/Eleve';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-studentfils',
  templateUrl: './studentfils.component.html',
  styleUrls: ['./studentfils.component.css']
})
export class StudentfilsComponent implements OnInit {
  
  @Input() eleve:Eleve;
  @Output() delete = new EventEmitter<Eleve>();
  @Output() Absent = new EventEmitter<Number>();
  
  constructor( ) { }

  ngOnInit(): void {
    
  }
  Delete_Eleve(){
    this.delete.emit(this.eleve);
  }

  AddAbsent(){
    this.Absent.emit(this.eleve.id);
  }
}
