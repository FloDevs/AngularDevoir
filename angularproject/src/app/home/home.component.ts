import { Component , OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { catchError } from 'rxjs/operators';
import { ProductService } from '../services/product.service';
import { of } from 'rxjs' ;
import { PriceSortPipe } from '../pipe/price-sort.pipe';
import { SearchProductPipe } from '../pipe/search-product.pipe';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule , PriceSortPipe, // Ajout du pipe dans imports
    SearchProductPipe , FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  products: Product[] = [];
  errorMessage: string = '';
  
  searchTerm: string = '';  // Pour la recherche par nom
  sortOrder: string = 'asc'; // Valeur par défaut pour le tri par prix

  constructor(private productService: ProductService, private router: Router) { }


  ngOnInit(): void {
    this.productService.getProducts()
      .pipe(
        catchError(error => {
          this.errorMessage = 'Une erreur est survenue lors du chargement des produits.';
          console.error(error);
          return of([]);
        })
      )
      .subscribe((data: Product[]) => {
        this.products = data;
      });
  }

  // Méthode pour changer l'ordre du tri
  setSortOrder(order: string) {
    this.sortOrder = order;
  }

  viewProduct(id: number): void {
    this.router.navigate(['/product', id]);
  }
}