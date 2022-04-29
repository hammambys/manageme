import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ClassComponent } from './views/class/class.component';
import { GradesComponent } from './views/grades/grades.component';
import { GroupsComponent } from './views/groups/groups.component';
import { MessagesComponent } from './views/messages/messages.component';
import { ScheduleComponent } from './views/schedule/schedule.component';
import { SettingsComponent } from './views/settings/settings.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { CourseDetailsComponent } from './views/course-details/course-details.component';
import { Group1Component } from './views/group1/group1.component';
import { Group2Component } from './views/group2/group2.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'class', component: ClassComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'grades', component: GradesComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'course/:id', component: CourseDetailsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'groups/groupe 1', component: Group1Component},
  {path: 'groups/groupe 2', component: Group2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
