import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CommonModule, AsyncPipe } from '@angular/common';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  
}

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  product$! : Observable<Product | undefined>;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    // Utilisation de switchMap pour capturer l'ID depuis l'URL et récupérer le produit correspondant
    this.product$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = +params.get('id')!;
        return this.productService.getProductById(id);
      })
    );
  }
}
