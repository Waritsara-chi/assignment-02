import { Routes } from '@angular/router';
import { LandmarksComponent } from './components/landmarks/landmarks.component';
import { ShowComponent } from './components/show/show.component';

export const routes: Routes = [
    { path: '', component: LandmarksComponent },
    { path: 'show/:id', component: ShowComponent },
  ];
  