import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HTTP {

  constructor(private http:HttpClient) { }

  getproducts(){
    return this.http.get(`https://dummyjson.com/products`);
  }
  getProductById(id: any) {
  return this.http.get(`https://dummyjson.com/products/${id}`);
}

}
