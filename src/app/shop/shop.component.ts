import { Component, OnInit, signal } from '@angular/core';
import { product } from './product/product';
import { ShopService } from './shop.service';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  providers: [ShopService],
})
export class ShopComponent implements OnInit {
  products: product[] = [];

  constructor(private shopService: ShopService) {}
  ngOnInit() {
    this.shopService.getProducts().subscribe(data=>{
      console.log(data);
      this.products = data;
    })
    // this.products = [
    //   {
    //     _id: '662e40660765885c7a4847b0',
    //     title: 'Product 1',
    //     slug: 'product-1',
    //     desc: 'Description of Product 1',
    //     price: 10.99,
    //     image: '../../assets/img/product1.webp',
    //     galleryImages: [
    //       { _id: '662f19ca22a7e7c256ac76ea', filename: 'product1_image1.jpg' },
    //       { _id: '662f19ca22a7e7c256ac76eb', filename: 'product1_image2.jpg' },
    //       { _id: '662f19ca22a7e7c256ac76ec', filename: 'product1_image3.jpg' },
    //     ],
    //   },
    //   {
    //     _id: '662e41040765885c7a4847b2',
    //     title: 'Product 3',
    //     slug: 'product-3',
    //     desc: 'Description of Product 3',
    //     price: 25.99,
    //     image: '../../assets/img/product3.webp',
    //     galleryImages: [
    //       { _id: '662f19ca22a7e7c256ac76ed', filename: 'product3_image1.jpg' },
    //       { _id: '662f19ca22a7e7c256ac76ee', filename: 'product3_image2.jpg' },
    //       { _id: '662f19ca22a7e7c256ac76ef', filename: 'product3_image3.jpg' },
    //     ],
    //   },
    //   {
    //     _id: '662e412c0765885c7a4847b3',
    //     title: 'Product 4',
    //     slug: 'product-4',
    //     desc: 'Description of Product 4',
    //     price: 14.99,
    //     image: '../../assets/img/product4.webp',
    //     galleryImages: [
    //       { _id: '662f19ca22a7e7c256ac76f0', filename: 'product4_image1.jpg' },
    //       { _id: '662f19ca22a7e7c256ac76f1', filename: 'product4_image2.jpg' },
    //       { _id: '662f19ca22a7e7c256ac76f2', filename: 'product4_image3.jpg' },
    //     ],
    //   },
    //   {
    //     _id: '662e41470765885c7a4847b4',
    //     title: 'Product 5',
    //     slug: 'product-5',
    //     desc: 'Description of Product 5',
    //     price: 29.99,
    //     image: '../../assets/img/product5.webp',
    //     galleryImages: [
    //       { _id: '662f19ca22a7e7c256ac76f3', filename: 'product5_image1.jpg' },
    //       { _id: '662f19ca22a7e7c256ac76f4', filename: 'product5_image2.jpg' },
    //       { _id: '662f19ca22a7e7c256ac76f5', filename: 'product5_image3.jpg' },
    //     ],
    //   },
    // ];
  }
}
