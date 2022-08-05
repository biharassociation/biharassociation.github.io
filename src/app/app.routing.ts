import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { TeamComponent } from './pages/team/team.component';
import { ChaptersComponent } from './pages/chapters/chapters.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { JoinusComponent } from './pages/joinus/joinus.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { UpcomingEventsComponent } from './pages/upcoming-events/upcoming-events.component';
import { PastEventsComponent } from './pages/past-events/past-events.component';
import { DonateComponent } from './pages/donate/donate.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'register',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'login',          component: LoginComponent },
    { path: 'about',          component: AboutComponent },
    { path: 'team',          component: TeamComponent },
    { path: 'chapters',          component: ChaptersComponent },
    { path: 'gallery',          component: GalleryComponent },
    { path: 'joinus',          component: JoinusComponent },
    { path: 'activities',          component: ActivitiesComponent },
    { path: 'upcomingEvents',          component: UpcomingEventsComponent },
    { path: 'pastEvents',          component: PastEventsComponent },
    { path: 'donate',          component: DonateComponent },
    { path: 'contact',          component: ContactComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
