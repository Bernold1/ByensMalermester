import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxMasonryOptions, NgxMasonryComponent } from 'ngx-masonry';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  public masonryOptions: NgxMasonryOptions = {
    gutter: 10,
  };

  @ViewChild(NgxMasonryComponent) masonry?: NgxMasonryComponent;

  masonryImages: [boolean, string][] = [];
  limit = 15;

  dummyPictures: [boolean, string][] = [
    [false, '../../../assets/images/gallery/2.jpg'],
    [false, '../../../assets/images/gallery/5.jpg'],
    [false, '../../../assets/images/gallery/6.jpg'],
    [false, '../../../assets/images/gallery/7.jpg'],
    [false, '../../../assets/images/gallery/8.jpg'],
    [false, '../../../assets/images/gallery/9.jpg'],
    [false, '../../../assets/images/gallery/10.jpg'],
    [false, '../../../assets/images/gallery/11.jpg'],
    [false, '../../../assets/images/gallery/12.jpg'],
    [false, '../../../assets/images/gallery/13.jpg'],
    [false, '../../../assets/images/gallery/14.jpg'],
    [false, '../../../assets/images/gallery/15.jpg'],
    [false, '../../../assets/images/gallery/16.jpg'],
    [false, '../../../assets/images/gallery/17.jpg'],
    [false, '../../../assets/images/gallery/18.jpg'],
    [false, '../../../assets/images/gallery/19.jpg'],
    [false, '../../../assets/images/gallery/20.jpg'],
    [false, '../../../assets/images/gallery/21.jpg'],
    [false, '../../../assets/images/gallery/22.jpg'],
    [false, '../../../assets/images/gallery/23.jpg'],
    [false, '../../../assets/images/gallery/24.jpg'],
    [false, '../../../assets/images/gallery/25.jpg'],
    [false, '../../../assets/images/gallery/26.jpg'],
    [false, '../../../assets/images/gallery/27.jpg'],
    [false, '../../../assets/images/gallery/28.jpg'],
    [false, '../../../assets/images/gallery/29.jpg'],
    [false, '../../../assets/images/gallery/30.jpg'],
    [false, '../../../assets/images/gallery/31.jpg'],
    [false, '../../../assets/images/gallery/33.jpg'],
    [false, '../../../assets/images/gallery/34.jpg'],
    [false, '../../../assets/images/gallery/35.jpg'],
    [false, '../../../assets/images/gallery/36.jpg'],
    [false, '../../../assets/images/gallery/37.jpg'],
    [false, '../../../assets/images/gallery/38.jpg'],
    [false, '../../../assets/images/gallery/39.jpg'],
    [false, '../../../assets/images/gallery/40.jpg'],
    [false, '../../../assets/images/gallery/41.jpg'],
    [false, '../../../assets/images/gallery/42.jpg'],
    [false, '../../../assets/images/gallery/43.jpg'],
    [false, '../../../assets/images/gallery/44.jpg'],
    [false, '../../../assets/images/gallery/45.jpg'],
  ];

  constructor() {}

  ngOnInit(): void {
    this.masonryImages = this.dummyPictures.slice(0, this.limit);
  }

  showMoreImages() {
    this.limit += 15;
    this.masonryImages = this.dummyPictures.slice(0, this.limit);
  }

  insertImage() {
    this.masonryImages.splice(0, 0, this.dummyPictures[0]);
    this.masonry?.reloadItems();
    this.masonry?.layout();
  }
  prependImage() {
    const image = this.dummyPictures[50];
    image[0] = true;
    this.masonryImages.push(image);
  }

  removeImage() {
    this.masonryImages.pop();
  }

  itemsLoaded() {
    console.log('itemsloaded');
  }
}
