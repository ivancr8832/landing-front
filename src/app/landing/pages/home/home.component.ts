import { Component, OnInit, inject } from '@angular/core';
import { CardHomeServices, ImageCarousel } from '../../interfaces';
import { cardServicesItems, imagesCarousel } from '../../constants';
import { VideoService } from '../../../services';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private videoService = inject(VideoService)

  public urlVideo: string = "";

  get cardServicesItems(): CardHomeServices [] {
    return cardServicesItems;
  }

  get imagesCarousel(): ImageCarousel[] {
    return imagesCarousel;
  }

  ngOnInit(): void {
    this.videoService.getVideoRandom().subscribe(resp => {
      this.urlVideo = resp.data!.url
    });
  }

}
