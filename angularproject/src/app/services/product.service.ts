import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map , catchError , of} from 'rxjs';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'products.json'; // Chemin correct pour le dossier public

  constructor(private http: HttpClient) { }

  // Récupérer tous les produits
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }

  // Récupérer un produit par ID
  getProductById(id: number): Observable<Product | undefined> {
    return this.getProducts().pipe(
      map((products: Product[]) => products.find(product => product.id === id)),
      catchError(() => of(undefined)) // Si une erreur survient, on retourne `undefined`
    );
  }}