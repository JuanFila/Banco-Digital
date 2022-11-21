const App = require('./App')

App.createUser('juan@teste.com', 'JuanFila')
App.createUser('user@teste.com', 'UserTeste')
App.createUser('user2@teste.com', 'User2Teste')

App.deposit('juan@teste.com', 100)

App.transfer('juan@teste.com','user@teste.com', 20)

App.cahngeLoanFee(10)

App.takeLoan('user2@teste.com', 1500, 24)

console.table(App.findUser('juan@teste.com'))
console.table(App.findUser('juan@teste.com').account)

console.table(App.findUser('user@teste.com'))
console.table(App.findUser('user@teste.com').account)

console.table(App.findUser('user2@teste.com'))
console.table(App.findUser('user2@teste.com').account)

//

console.log(App.findUser('juan@teste.com'))
console.log(App.findUser('juan@teste.com').account)

console.log(App.findUser('user@teste.com'))
console.log(App.findUser('user@teste.com').account)

console.log(App.findUser('user2@teste.com'))
console.log(App.findUser('user2@teste.com').account)
console.log(App.findUser('user2@teste.com').account.loans[0].installments)

