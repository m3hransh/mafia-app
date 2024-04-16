import { Route } from '@angular/router';
import { GameSetupComponent } from './game-setup/game-setup.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

export const appRoutes: Route[] = [
  {path: '', component: WelcomePageComponent },
  //game setup route
  {path: 'game-setup', component: GameSetupComponent},

];
