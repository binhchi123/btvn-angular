import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styleUrls: ['./siderbar.component.css']
})
export class SiderbarComponent implements OnInit {
  public categories: Array<any> = [
    { id: 1, name: 'Quần áo nam' },
    { id: 2, name: 'Túi xách nữ' },
    { id: 3, name: 'Giày dép đẹp' },
    { id: 3, name: 'Trang sức/ Đá quý' },
    { id: 4, name: 'Đồng hồ kỹ thuật số' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
