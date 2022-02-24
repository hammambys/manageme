import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './views/calendar/calendar.component';
import { CoursesComponent } from './views/courses/courses.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { GradesComponent } from './views/grades/grades.component';
import { MessagesComponent } from './views/messages/messages.component';
import { SettingsComponent } from './views/settings/settings.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'grades', component: GradesComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'settings', component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
