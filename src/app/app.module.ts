import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TodolistComponent } from './Todolist/Todolist.component';

import { Routes,RouterModule} from '@angular/router';

const appRoute:Routes=[
    {path:'',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'Todolist',component:TodolistComponent},
]


@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      RegisterComponent,
      TodolistComponent
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(appRoute),
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
