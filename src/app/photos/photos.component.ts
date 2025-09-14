import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [BrowserModule, SlickCarouselModule],
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent {
  images = [
    'assets/images/background_image.png',
    'assets/images/Grabówki1 zachód.png',
    'assets/images/image2.png',
    'assets/images/image3.png',
    'assets/images/image4.png',
    // 'assets/images/dron111.png',
  ];

  slideConfig = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,
  };
}
