import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Eleve } from '../Model/Eleve';
@Injectable({
  providedIn: 'root'
})
export class EleveSerService {
  private api:string="http://localhost:3000/Eleve";
  httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})}
  constructor(private http:HttpClient) { }

 
  GetAllEleve():Observable<Eleve[]>
  {
       return this.http.get<Eleve[]>(this.api);
  }

  DeleteEleve(myobject: Eleve | number):Observable<Eleve>
  {
     const id= typeof myobject==='number'?myobject:myobject.id;
     return this.http.delete<Eleve>(this.api+"/"+id);
  }
  AddEleve(eleve : Eleve):Observable<Eleve>{
    return this.http.post<Eleve>(this.api,eleve,this.httpOptions);
  }

  UpdateEleve(id : number, teacher : Eleve):Observable<Eleve>{
    return this.http.put<Eleve>(this.api+'/'+id,teacher,this.httpOptions);
  }

	GetEleveById(id:number):Observable<Eleve>
  {
    return this.http.get<Eleve>(this.api+"/"+id);
  }

  AddAbsent(object:Eleve):Observable<Eleve>{
    object.NBabsent++;
     return this.http.put<Eleve>(this.api+"/"+object.id,object,this.httpOptions);
  }

}
