import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Components
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ClassComponent } from './views/class/class.component';
import { ScheduleComponent } from './views/schedule/schedule.component';
import { GroupsComponent } from './views/groups/groups.component';
import { MessagesComponent } from './views/messages/messages.component';
import { SettingsComponent } from './views/settings/settings.component';
import { GradesComponent } from './views/grades/grades.component';
import { SidebarRightComponent } from './components/sidebar-right/sidebar-right.component';
import { ClassCardComponent } from './components/class-card/class-card.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

// Angular material
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { HomeComponent } from './views/home/home.component';
import { NgChartsModule } from 'ng2-charts';
import { GraphComponent } from './components/graph/graph.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { GroupCardComponent } from './components/group-card/group-card.component';
import { GradesCardComponent } from './components/grades-card/grades-card.component';
import { MiniGroupCardComponent } from './components/mini-group-card/mini-group-card.component';
import { GradesTableComponent } from './components/grades-table/grades-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DsCardComponent } from './components/ds-card/ds-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    ClassComponent,
    MessagesComponent,
    SettingsComponent,
    GradesComponent,
    SidebarRightComponent,
    ClassCardComponent,
    ScheduleComponent,
    GroupsComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    GraphComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    GroupCardComponent,
    GradesCardComponent,
    MiniGroupCardComponent,
    GradesTableComponent,
    DsCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    NgChartsModule,
    HttpClientModule,
    FormsModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
