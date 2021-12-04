import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor(
    public navController: NavController
  ) { }

  ngOnInit() {}

  goToClima() {
    this.navController.navigateForward(['clima/']);
  }

  goToConversor() {
    this.navController.navigateForward(['conversor/']);
  }

  goToListaPersonajes() {
    this.navController.navigateForward(['listapersonajes/']);
  }
  goToCrudPersonajes(){
    this.navController.navigateForward(['crud-personajes/']);
  }
  goToHome() {
    this.navController.navigateForward(['home/']);
  }

}
