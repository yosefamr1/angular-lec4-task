import { Component } from '@angular/core';
import { HTTP } from '../http';
import { ActivatedRoute } from '@angular/router';
import { Cartservice } from '../cartservice';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails {
  product: any;

  constructor(private httpServicen: HTTP, private route: ActivatedRoute,private cartservice:Cartservice) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id !== null) {
      this.httpServicen.getProductById(id).subscribe((res) => {
        this.product = res;
      });
    }
  }




addToCart() {
    // event.stopPropagation(); 
    this.cartservice.addtocart(this.product)
  }
  
}
