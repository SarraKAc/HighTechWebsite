import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/models/products';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(
     private router: Router,
    //  private crud: CrudService,
    ) { }
     orderHead: any;
     isDescOrder: any;
     productList: ProductsService[] = [];

   goDetails(id: string) {
      this.router.navigate(['details/', id]);
   }

  sort(head: any) {
    this.isDescOrder = !this.isDescOrder;
    this.orderHead = head;
  }
  ngOnInit(): void {
  //    this.crud.getAllProducts().subscribe((data) => {
  //      this.productList = data;
  //  });
  }
}
