import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillComponent } from './skills/skill.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'skill', component: SkillComponent },
      { path: 'education', component: EducationComponent },
      { path: 'experience', component: ExperienceComponent},
      { path: 'blogs', component: BlogsComponent},
      { path: 'contact', component: ContactMeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule { }
