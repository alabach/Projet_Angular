import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teacher } from '../Model/teacher';
@Injectable({
  providedIn: 'root'
})
export class TeacherserService {
  private api:string="http://localhost:3000/teacher";
  httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})}
  constructor(private http:HttpClient) { }

  GetTeacher():Observable<Teacher[]>{
    return this.http.get<Teacher []>(this.api);
  }
  GetAllTeacher():Observable<Teacher[]>
  {
       return this.http.get<Teacher[]>(this.api);
  }

  DeleteTeacher(myobject: Teacher | number):Observable<Teacher>
  {
     const id= typeof myobject==='number'?myobject:myobject.id;
     return this.http.delete<Teacher>(this.api+"/"+id);
  }
  AddTeacher(teacher : Teacher):Observable<Teacher>{
    return this.http.post<Teacher>(this.api,teacher,this.httpOptions);
  }

  Updateteacher(id : number, teacher : Teacher):Observable<Teacher>{
    return this.http.put<Teacher>(this.api+'/'+id,teacher,this.httpOptions);
  }

	GetTeacherById(id:number):Observable<Teacher>
  {
    return this.http.get<Teacher>(this.api+"/"+id);
  }


}

