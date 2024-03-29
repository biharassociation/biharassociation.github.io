import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { TeamComponent } from './pages/team/team.component';
import { ChaptersComponent } from './pages/chapters/chapters.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { JoinusComponent } from './pages/joinus/joinus.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { UpcomingEventsComponent } from './pages/upcoming-events/upcoming-events.component';
import { PastEventsComponent } from './pages/past-events/past-events.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DonateComponent } from './pages/donate/donate.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AuthService } from './services/auth.service';
import {  MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MissionComponent } from './pages/mission/mission.component';
import { EventScheduleComponent } from './pages/event-schedule/event-schedule.component';
import { PastEventsBdComponent } from './pages/past-events-bd/past-events-bd.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    AboutComponent,
    TeamComponent,
    ChaptersComponent,
    GalleryComponent,
    JoinusComponent,
    ActivitiesComponent,
    UpcomingEventsComponent,
    PastEventsComponent,
    ContactComponent,
    DonateComponent,
    DashboardComponent,
    MissionComponent,
    EventScheduleComponent,
    PastEventsBdComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    NoopAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule

  ],
  providers: [ AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
