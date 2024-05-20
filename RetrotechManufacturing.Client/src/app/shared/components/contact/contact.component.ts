import { Component } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  fbLink: string = "https://www.facebook.com/retrotech.manufacturing/";
  instaLink: string = "https://www.instagram.com/thatrotaxcar/";
  ytLink: string = "https://www.youtube.com/@RetrotechCarParts";
}
