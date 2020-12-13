import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ClassesComponent } from './classes/classes.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UpdateTeacherComponent } from './update-teacher/update-teacher.component';
import { EleveComponent } from './eleve/eleve.component';
import { AddEleveComponent } from './add-eleve/add-eleve.component';
import { UpdateEleveComponent } from './update-eleve/update-eleve.component';
import { StudentfilsComponent } from './studentfils/studentfils.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClassesComponent,
    TeacherComponent,
    AdduserComponent,
    UpdateTeacherComponent,
    EleveComponent,
    AddEleveComponent,
    UpdateEleveComponent,
    StudentfilsComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
