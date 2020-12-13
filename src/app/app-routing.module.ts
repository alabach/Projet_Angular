import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClassesComponent } from './classes/classes.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UpdateTeacherComponent } from './update-teacher/update-teacher.component';
import {AddEleveComponent} from './add-eleve/add-eleve.component';
import {EleveComponent} from './eleve/eleve.component';
import {UpdateEleveComponent} from './update-eleve/update-eleve.component';




const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"classes",component:ClassesComponent},
  {path:"teacher",component:TeacherComponent},
  {path:"AddTeacher",component:AdduserComponent},
  {path:"Updatteacher/:id",component:UpdateTeacherComponent},
  {path:"Eleve",component:EleveComponent},
  {path:"AddEleve",component:AddEleveComponent},
  {path:"UpdateEleve/:id",component:UpdateEleveComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
