import { Component, OnInit } from '@angular/core';
import {CurrencyClientService, RootObject} from "../../services/currency-client.service";



@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  messageForUser: any;
  rootObject: RootObject;
  PLN: number;
  checkingResult: any;
  precision: number;
  // change: number;
  // initialPrecision: number;
  // finalCurrency: number;
  // finalPrecision: number;

  constructor(private currencyClientService: CurrencyClientService) {
    this.checkingResult = '?';
    // this.initialPrecision = 5;

  }

  ngOnInit(): void {
    // this.currencyClientService.getCurrency().subscribe(data => {this.rootObject = data;});
    this.currencyClientService.getCurrency().subscribe(data => {this.rootObject = data;});
  }

  sayHello(value: string) {
    this.messageForUser = 'Cześć ' + value;

  }

  check(value: any) {

    this.PLN = Number(this.rootObject.conversion_rates.PLN.toPrecision(Number((this.precision+1))));
    console.log(this.precision);
    if(value > this.PLN){
      this.checkingResult = 'Zbyt duża wartość';
    }
    else if(value < this.PLN){
      this.checkingResult = 'Zbyt mała wartość';
    }
    else{
      this.checkingResult = 'ok wartość';
    }
  }

  // changeAccuracy(){

    // if(change > 1){
    //   this.initialPrecision = this.initialPrecision+1;
    //   this.finalCurrency = Number(this.PLN.toPrecision(this.initialPrecision));
    //
    // }
    // else if(change < 1){
    //   this.initialPrecision = this.initialPrecision-1;
    //   this.finalCurrency = Number(this.PLN.toPrecision(this.initialPrecision));
    // }
  // }
}
