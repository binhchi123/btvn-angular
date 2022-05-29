import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public products: Array<any> = [

    { id: 1, name: 'Áo sơ mi nam thời trang', image: 'https://thuvienmuasam.com/uploads/default/original/2X/e/ebace14de8c553f414a830be6bb2b3c13a1194e6.jpeg' },

    { id: 2, name: 'Túi xách đẹp', image: 'https://lzd-img-global.slatic.net/g/p/8cb5ad439d96f5c9d6b7b08433b5b549.jpg_720x720q80.jpg_.webp' },

    { id: 3, name: 'Giày đẹp', image: 'https://lzd-img-global.slatic.net/g/p/a9f54de2e6263a47488dd738f9c821a0.png_720x720q80.jpg_.webp' }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
