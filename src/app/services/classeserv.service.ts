import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Classes } from '../Model/Classes';
@Injectable({
  providedIn: 'root'
})
export class ClasseservService {

  private api:string="http://localhost:3000/Classes";

  constructor(private http:HttpClient) { }

  GetAllClasses():Observable<Classes[]>
  {
       return this.http.get<Classes[]>(this.api);
  }

  DeleteClasses(myobject: Classes | number):Observable<Classes>
  {
     const id= typeof myobject==='number'?myobject:myobject.id;
     return this.http.delete<Classes>(this.api+"/"+id);
  }

	GetClassesById(id:number):Observable<Classes>
  {
    return this.http.get<Classes>(this.api+"/"+id);
  }

}
