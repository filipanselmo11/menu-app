import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GamesComponent } from './pages/games/games.component';
import { MusicComponent } from './pages/music/music.component';
import { NewComponent } from './pages/new/new.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    title: 'Home',
    path: 'home',
    component: HomeComponent
  },
  {
    title: 'About',
    path: 'about',
    component: AboutComponent
  },
  {
    title: 'Calendar',
    path: 'calendar',
    component: CalendarComponent
  },
  {
    title: 'Dashboard',
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    title: 'Games',
    path: 'games',
    component: GamesComponent
  },
  {
    title: 'Music',
    path: 'music',
    component: MusicComponent
  },
  {
    title: 'New',
    path: 'new',
    component: NewComponent
  }
];
