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
    'assets/images/background_image.webp',
    'assets/images/Grabówki1 zachód.webp',
    'assets/images/image2.webp',
    'assets/images/image3.webp',
    'assets/images/image4.webp',
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
