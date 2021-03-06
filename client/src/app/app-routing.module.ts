import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { GradesComponent } from './views/grades/grades.component';
import { GroupsComponent } from './views/groups/groups.component';
import { MessagesComponent } from './views/messages/messages.component';
import { ScheduleComponent } from './views/schedule/schedule.component';
import { SettingsComponent } from './views/settings/settings.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { CourseDetailsComponent } from './views/course-details/course-details.component';
import {CourseEditComponent} from "./views/course-edit/course-edit.component"
import { CoursesComponent } from './views/courses/courses.component';
import { ProfileComponent } from './views/profile/profile.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'grades', component: GradesComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'courses/:id', component: CourseDetailsComponent },
  {path:'courses/:id/edit',component:CourseEditComponent},
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
