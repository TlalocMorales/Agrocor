import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/api/productos'; // Ajusta la URL según la ruta de tu API

  constructor(private http: HttpClient) { }

  // Obtener todos los productos
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  // Crear un nuevo producto
  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  // Puedes agregar más funciones según tus necesidades, como actualizar, eliminar, etc.

  // Ejemplo de función para actualizar un producto
  updateProduct(productId: number, updatedProduct: Product): Observable<Product> {
    const updateUrl = `${this.apiUrl}/${productId}`;
    return this.http.put<Product>(updateUrl, updatedProduct);
  }

  // Ejemplo de función para eliminar un producto
  deleteProduct(productId: number): Observable<void> {
    const deleteUrl = `${this.apiUrl}/${productId}`;
    return this.http.delete<void>(deleteUrl);
  }
}
