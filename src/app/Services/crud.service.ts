import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductsService } from './../models/products';

const URL=environment.apiUrl;
const headers = new HttpHeaders({
  'Content-Type': 'application/json',
});
const requestOptions = { headers: headers };

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor() {}
  // constructor(private http: HttpClient) {}

  // //Get All Products
  // public getAllProducts(): Observable<ProductsService[]> {
  //   return this.http.get<ProductsService[]>(URL+ '/products',requestOptions);
  // }
}
