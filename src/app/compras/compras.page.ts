// compras.page.ts
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Product } from '../product.models';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.page.html',
  styleUrls: ['./compras.page.scss'],
})
export class ComprasPage implements OnInit {

  purchaseHistory: any[] = [];

  constructor(private storage: Storage, private navCtrl: NavController) { }

  ngOnInit() {
    this.loadPurchaseHistory();
  }

  async loadPurchaseHistory() {
    const purchaseHistory = await this.storage.get('purchaseHistory');
    if (purchaseHistory) {
      this.purchaseHistory = purchaseHistory.reverse(); // Reverse para mostrar las compras más recientes primero
    }
  }

  goBack(): void {
    this.navCtrl.navigateBack('/productos');
  }
}
