import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { CustomAccount } from './class/CustomAccount'

// Instância de PeopleAccount
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log('PeopleAccount inicial:', peopleAccount)
peopleAccount.deposit(100)
peopleAccount.withdraw(50)
peopleAccount.getBalance()

// Instância de CompanyAccount
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log('CompanyAccount inicial:', companyAccount)
companyAccount.deposit(50)
companyAccount.getLoan(200)
companyAccount.getBalance()

// Instância de CustomAccount
const customAccount: CustomAccount = new CustomAccount('Custom', 30)
console.log('CustomAccount inicial:', customAccount)
customAccount.deposit(100)
customAccount.customDeposit(50)
customAccount.withdraw(30)
customAccount.getBalance()