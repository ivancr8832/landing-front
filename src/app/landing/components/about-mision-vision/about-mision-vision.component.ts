import { Component, Input } from '@angular/core';

@Component({
  selector: 'about-mision-vision',
  templateUrl: './about-mision-vision.component.html',
  styleUrls: ['./about-mision-vision.component.css']
})
export class AboutMisionVisionComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() color: string = '';
}
