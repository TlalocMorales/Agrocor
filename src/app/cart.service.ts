import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() { }

  addToCart(item: any) {
    const currentCart = this.cartItemsSubject.value;
    const updatedCart = [...currentCart, item];
    this.cartItemsSubject.next(updatedCart);
  }

  getCartItems() {
    return this.cartItemsSubject.value;
  }
}
