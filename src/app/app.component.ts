import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import {
  faLinkedinIn,
  faTwitter,
  faGooglePlus,
  faPinterest,
  faRedditSquare,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Demo';
  linkedInIcon = faLinkedinIn;
  twitterIcon = faTwitter;
  googleIcon = faGooglePlus;
  pinterestIcon = faPinterest;
  rssIcon = faRedditSquare;
}
