import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  pro: any;
  Products: Array<any> = [
    { id: 1, name: 'Áo sơ mi nam', price: 120000, image: 'https://thuvienmuasam.com/uploads/default/original/2X/e/ebace14de8c553f414a830be6bb2b3c13a1194e6.jpeg' },
    { id: 2, name: 'Đồng hồ nam', price: 150000, image: 'https://donghominhtuong.com.vn/assets/uploads/images/Category/dong-ho-deo-tay/nen-mua-dong-ho-nam-hang-nao-1.jpg' },
    { id: 3, name: 'Túi xách đẹp', price: 150000, image: 'https://lzd-img-global.slatic.net/g/p/8cb5ad439d96f5c9d6b7b08433b5b549.jpg_720x720q80.jpg_.webp' },
    { id: 4, name: 'Giày đẹp', price: 150000, image: 'https://lzd-img-global.slatic.net/g/p/a9f54de2e6263a47488dd738f9c821a0.png_720x720q80.jpg_.webp' },
  ]
  constructor(private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.actRoute.snapshot.params['id'];
    console.log(id);
    console.log(this.Products.find(function (element) {
      return id == element.id;
    }))

    this.pro = this.Products.find(function (element) {
      return id == element.id;
    })
  }

}
