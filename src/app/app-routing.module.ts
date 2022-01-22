import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about/about.component';
import { HeaderComponent } from './header/header/header.component';
import { ExperienceComponent } from './experience/experience/experience.component';
import { FooterComponent } from './footer/footer/footer.component';
import { ProjectsComponent } from './projects/projects/projects.component';
import { SkillsComponent } from './skills/skills/skills.component';

const routes: Routes = [
  {path:"", component:HeaderComponent},
  {path:"about", component:AboutComponent},
  {path:"header", component:HeaderComponent},
  {path:"experience", component:ExperienceComponent},
  {path:"footer", component:FooterComponent},
  {path:"projects", component:ProjectsComponent},
  {path:"skills", component:SkillsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
