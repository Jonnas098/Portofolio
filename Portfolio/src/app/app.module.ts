import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideComponent } from './aside/aside.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProyectosJohnComponent } from './proyectos-john/proyectos-john.component';
import { AngularProjectsComponent } from './angular-projects/angular-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    ProjectsComponent,
    ProyectosJohnComponent,
    AngularProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
