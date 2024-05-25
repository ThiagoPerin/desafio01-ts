import { DioAccount } from "./DioAccount"

export class CustomAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  customDeposit = (value: number): void => {
    if(this.validateStatus()){
      this.balance += value + 10;
      console.log('Voce depositou e ganhou + 10')
    }
  }
}
