import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TypingAnimationModule } from 'angular-typing-animation'


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { AboutComponent } from './about/about/about.component';
import { ExperienceComponent } from './experience/experience/experience.component';
import { FooterComponent } from './footer/footer/footer.component';
import { ProjectsComponent } from './projects/projects/projects.component';
import { SkillsComponent } from './skills/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ExperienceComponent,
    FooterComponent,
    ProjectsComponent,
    SkillsComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TypingAnimationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
