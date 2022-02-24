import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { HomeComponent } from './views/home/home.component';
import { CalendarComponent } from './views/calendar/calendar.component';
import { CoursesComponent } from './views/courses/courses.component';
import { PrivateFilesComponent } from './views/private-files/private-files.component';
import { ParticipantsComponent } from './views/participants/participants.component';
import { ClassComponent } from './views/class/class.component';
import { MessagesComponent } from './views/messages/messages.component';
import { SettingsComponent } from './views/settings/settings.component';
import { GradesComponent } from './views/grades/grades.component';
import { SidebarRightComponent } from './components/sidebar-right/sidebar-right.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    HomeComponent,
    CalendarComponent,
    CoursesComponent,
    PrivateFilesComponent,
    ParticipantsComponent,
    ClassComponent,
    MessagesComponent,
    SettingsComponent,
    GradesComponent,
    SidebarRightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
