import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ticket',
  templateUrl: 'ticket.page.html',
  styleUrls: ['ticket.page.scss'],
})
export class TicketPage {

  public productsCar: any[] = [];
  public total: number = 0;

  constructor(private navCtrl: NavController, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      const state = window.history.state;
      if (state && state.productsCar && state.total) {
        this.productsCar = state.productsCar;
        this.total = state.total;
      }
    });
  }

  goBack(): void {
    this.navCtrl.navigateBack('/productos');
  }
}
