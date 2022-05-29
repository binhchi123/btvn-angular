import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public soMi: Array<any> = [

    { id: 1, name: 'Áo sơ mi nam thời trang', image: 'https://thuvienmuasam.com/uploads/default/original/2X/e/ebace14de8c553f414a830be6bb2b3c13a1194e6.jpeg', price: 150000, salePrice: 130000 },

    { id: 2, name: 'Áo sơ mi nam thời trang', image: 'https://product.hstatic.net/1000311467/product/afn14-6_cdedc1c6c52f43a096fa00ddbe52628b_master.jpg', price: 120000, salePrice: 100000 },

    { id: 3, name: 'Áo sơ mi nam thời trang', image: 'https://kabuto.vn/wp-content/uploads/2020/11/hoa-tiet-phoi-ao-so-mi-voi-ao-thun-nam.jpg', price: 180000, salePrice: 130000 },

    { id: 4, name: 'Áo sơ mi nam thời trang', image: 'https://mcdn.coolmate.me/image/April2021/ao-so-mi-nam-den-3.jpg', price: 120000, salePrice: 100000 },

  ]
  public dongHo: Array<any> = [
    { id: 1, name: 'Đồng hồ nam', image: 'https://donghominhtuong.com.vn/assets/uploads/images/Category/dong-ho-deo-tay/nen-mua-dong-ho-nam-hang-nao-1.jpg', price: 1500000, salePrice: 10000000 },

    { id: 2, name: 'Đồng hồ nam', image: 'https://my-test-11.slatic.net/p/1775a9b80353be612ccc6726cf1ed6ef.jpg', price: 2500000, salePrice: 2000000 },

    { id: 3, name: 'Đồng hồ nam', image: 'https://vn-live-02.slatic.net/p/acdff959dde8b8a849e90156b032ea9f.jpg', price: 5000000, salePrice: 3000000 },

    { id: 4, name: 'Đồng hồ nam', image: 'https://ae01.alicdn.com/kf/HTB1WfoPRVXXXXcqaXXXq6xXFXXXv/Nam-a-N-ng-T-ng-C-ng-H-Carnival-Nam-Cao-C-p-Tourbillon-ng.jpg', price: 1000000, salePrice: 900000 },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
