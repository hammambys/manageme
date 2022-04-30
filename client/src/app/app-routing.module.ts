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
import { CoursesComponent } from './views/courses/courses.component';
import { ProfileComponent } from './views/profile/profile.component';
import { CourseVideosComponent } from './views/course-videos/course-videos.component';
import { CourseDocumentsComponent } from './views/course-documents/course-documents.component';

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
  { path: 'course/:id', component: CourseDetailsComponent },
  { path: 'course/:id/videos/:id_vid', component: CourseVideosComponent },
  { path: 'course/:id/documents/:id_doc', component: CourseDocumentsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
