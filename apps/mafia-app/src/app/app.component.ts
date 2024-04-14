import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, WelcomePageComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'mafia-app';
}
