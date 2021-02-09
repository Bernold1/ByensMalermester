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
    [false, 'https://source.unsplash.com/433x649/?Uruguay'],
    [false, 'https://source.unsplash.com/530x572/?Jamaica'],
    [false, 'https://source.unsplash.com/531x430/?Kuwait'],
    [false, 'https://source.unsplash.com/586x1073/?Bermuda'],
    [false, 'https://source.unsplash.com/500x571/?Ecuador'],
    [false, 'https://source.unsplash.com/579x518/?Virgin Islands (British)'],
    [false, 'https://source.unsplash.com/503x548/?Angola'],
    [false, 'https://source.unsplash.com/511x630/?Mauritania'],
    [false, 'https://source.unsplash.com/414x767/?Sri Lanka'],
    [false, 'https://source.unsplash.com/443x704/?St. Helena'],
    [false, 'https://source.unsplash.com/441x1145/?Namibia'],
    [false, 'https://source.unsplash.com/491x1097/?Samoa'],
    [false, 'https://source.unsplash.com/570x851/?Eritrea'],
    [false, 'https://source.unsplash.com/560x1072/?Iraq'],
    [false, 'https://source.unsplash.com/551x598/?Togo'],
    [false, 'https://source.unsplash.com/518x813/?Romania'],
    [false, 'https://source.unsplash.com/497x524/?Kenya'],
    [false, 'https://source.unsplash.com/549x826/?Martinique'],
    [false, 'https://source.unsplash.com/559x627/?Tokelau'],
    [false, 'https://source.unsplash.com/594x513/?Belize'],
    [false, 'https://source.unsplash.com/480x1181/?Virgin Islands (US)'],
    [false, 'https://source.unsplash.com/526x552/?Chile'],
    [false, 'https://source.unsplash.com/427x504/?Western Sahara'],
    [false, 'https://source.unsplash.com/468x971/?St. Pierre and Miquelon'],
    [false, 'https://source.unsplash.com/419x790/?Thailand'],
    [false, 'https://source.unsplash.com/417x1125/?Myanmar'],
    [false, 'https://source.unsplash.com/480x632/?Cocos (Keeling Islands)'],
    [false, 'https://source.unsplash.com/416x900/?Belarus'],
    [false, 'https://source.unsplash.com/408x837/?Panama'],
    [false, 'https://source.unsplash.com/541x1021/?Slovak Republic'],
    [false, 'https://source.unsplash.com/597x1107/?Malta'],
    [false, 'https://source.unsplash.com/487x842/?Bahrain'],
    [false, 'https://source.unsplash.com/403x904/?Somalia'],
    [false, 'https://source.unsplash.com/544x515/?Morocco'],
    [false, 'https://source.unsplash.com/577x1044/?Djibouti'],
    [false, 'https://source.unsplash.com/404x437/?France, Metropolitan'],
    [false, 'https://source.unsplash.com/482x1079/?Libya'],
    [false, 'https://source.unsplash.com/473x887/?Bolivia'],
    [false, 'https://source.unsplash.com/583x614/?Kazakhstan'],
    [false, 'https://source.unsplash.com/592x838/?Guyana'],
    [false, 'https://source.unsplash.com/422x731/?Switzerland'],
    [false, 'https://source.unsplash.com/448x985/?Venezuela'],
    [false, 'https://source.unsplash.com/494x936/?Uzbekistan'],
    [false, 'https://source.unsplash.com/461x762/?Benin'],
    [false, 'https://source.unsplash.com/550x676/?Palau'],
    [false, 'https://source.unsplash.com/524x901/?Laos'],
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
