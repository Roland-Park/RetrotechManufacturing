import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faFacebookSquare, faYoutubeSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @Input() isMiniVersion: boolean;
  faFacebook = faFacebookSquare;
  faYoutube = faYoutubeSquare;
  faInstagram = faInstagram;
  fbLink: string = "https://www.facebook.com/retrotech.manufacturing/";
  instaLink: string = "https://www.instagram.com/thatrotaxcar/";
  ytLink: string = "https://www.youtube.com/@RetrotechCarParts";

  constructor(private router: Router){

  }
}
