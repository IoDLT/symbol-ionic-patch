import { Component } from '@angular/core';
import { Account, NetworkType } from 'symbol-sdk';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  privateKey: string;

  constructor() {
    this.generateAccount();
  }

  generateAccount() {
    const account = Account.generateNewAccount(NetworkType.MIJIN_TEST);
    this.privateKey = account.privateKey;
  }

}
