// Constructor Function For Accounts..

function BankAccount(accountNumber, name, type, balance){
    this.Account_Number = accountNumber, 
    this.Name = name,
    this.Type = type,
    this.Balance = balance,
    this.isActive = true
}

BankAccount.prototype.deposit = function(amount){
    if(amount > 0){
        this.Balance += amount;
        console.log(`Deposited ${amount} Current Balance : ${this.Balance}`);
    }
    else{
        console.log(`Invalid Deposite Amount`);
    }
}

BankAccount.prototype.Withdraw = function(amount){
    if(this.Balance >= amount && this.isActive && amount > 0){
        this.Balance -= amount;
        console.log(`Withdraw ${amount} Current Balance:${this.balance}`);
    }
    else{
        console.log(`Invalid Withdraw Amount`);
    }
}

BankAccount.prototype.checkBalance = function(){
    console.log(`Account Balance: ${this.Balance}`);
}

BankAccount.prototype.isActive = function(){
    return this.isActive;
}

function getTotalBalance(accounts){
    let totalBalance = 0;
    for(let account of accounts){
        if(this.isActive){
            totalBalance += account.Balance;
        }
    }
    return totalBalance
} 

// Create multiple BankAccount objects

const account1 = new BankAccount(1234567, "Jitesh", "Savings", 10000);
const account2 = new BankAccount(1234598, "Vansh", "Current", 3000000);
const account3 = new BankAccount(1234597, "Shashwat", "Current", 500000); 

// Perform deposit, withdrawal, and balance check operations

account1.deposit(500);
account2.Withdraw(1000);
account3.deposit(200);

account1.checkBalance();
account2.checkBalance();
account3.checkBalance();

// Test isActive method

console.log("Account 1 is active:", account1.isActive);
console.log("Account 2 is active:", account2.isActive);
console.log("Account 3 is active:", account3.isActive);

// Test getTotalBalance function
const accounts = [account1, account2, account3];
const totalBalance = getTotalBalance(accounts);
console.log("Total balance of all active accounts: $", totalBalance);