import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { ContactMeComponent } from '../app/apps/contact-me/contact-me.component';
import { ContactMeService } from '../app/apps/contact-me/contact-me.service';
import { SkillComponent } from '../app/apps/skills/skill.component';
import { EducationComponent } from '../app/apps/education/education.component';
import { ExperienceComponent } from '../app/apps/experience/experience.component';
import { BlogsComponent } from '../app/apps/blogs/blogs.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillComponent,
    EducationComponent,
    ExperienceComponent,
    BlogsComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ContactMeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
