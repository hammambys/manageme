import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './views/calendar/calendar.component';
import { CoursesComponent } from './views/courses/courses.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { HomeComponent } from './views/home/home.component';
import { ParticipantsComponent } from './views/participants/participants.component';
import { PrivateFilesComponent } from './views/private-files/private-files.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'home', component: HomeComponent },
  { path: 'calendar', component: CalendarComponent },

  { path: 'courses', component: CoursesComponent },

  { path: 'participants', component: ParticipantsComponent },
  { path: 'private-files', component: PrivateFilesComponent },

  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
