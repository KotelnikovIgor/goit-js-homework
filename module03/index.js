// !Задание 1
// Напиши скрипт, который, для объекта user, последовательно:
// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'javascript'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

// !Решение

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user['mood'] = 'happy';
// user['hobby'] = 'javascript';
// user['premium'] = 'false';

// let userKeys = Object.keys(user);
// for(const key of userKeys) {
//   // console.log('key', key);
//   console.log(`${key} :`, user[key]);
// };

// console.log(user.premium);
// user.name = 'Igor';
// console.log('user', user)
// console.log('user', user)


// !Задание 2
// Напиши функцию countProps(obj), считающую кол-во свойств в объекте. 
// Функция возвращает число - количество свойств.
// Вызовы функции для проверки работоспособности твоей реализации.

// !Решение

// function countProps(object) {
//   const arrKeys = Object.keys(object);
//   // console.log('arrKeys', object);
//   return arrKeys.length;
// }

// console.log(countProps({})); // 0
// console.log(countProps({ name: 'Mango', age: 2 })); // 2
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

// !Задание 3
// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и 
// возвращает имя самого продуктивного (который выполнил больше всех задач). 
// Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".
// Вызовы функции для проверки работоспособности твоей реализации.

// !Решение

// function findBestEmployee(employees) {
//   const arrKeys = Object.keys(employees);
//   let employedBest = 0;
//   let name;
//   for(const key of arrKeys) {
//     if(employees[key] > employedBest) {
//       employedBest = employees[key];
//       name = key;
//     }
//   }
//   return name;
// }

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }),
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }),
// ); // lux

// !Задание 4
// Напиши функцию countTotalSalary(employees) принимающую объект зарплат. 
// Функция считает общую сумму запрплаты работников и возращает ее. 
// Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".
// Вызовы функции для проверки работоспособности твоей реализации.

// !Решение

// function countTotalSalary(employees) {
//   let totalCount = 0;
//   const salaries = Object.values(employees);
//   console.log(salaries);

//   for(const salary of salaries) {
//     totalCount += salary;
//   }
//   return totalCount;
// }

// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   }),
// ); // 400

// !Задание 5
// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя ключа. 
// Возвращает массив значений определенного поля prop из каждого объекта в массиве.
// Вызовы функции для проверки работоспособности твоей реализации.

// !Решение

// function getAllPropValues(arr, prop) {
//     const items = [];
//     for(const item of arr) {
//       if(item[prop] !== undefined)
//       items.push(item[prop]);
//     }
//     return items;
// };



// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []

// !Задание 6
// Напиши функцию calculateTotalPrice(arr, productName), которая получает массив объектов и имя продукта (значение свойства name). 
// Возвращает общую стоимость продукта (цена * количество).
// Вызовы функции для проверки работоспособности твоей реализации.

//!Решение

// function calculateTotalPrice(arr, productName) {
//   let totalPrice = 0;
//   for(const item of arr) {
//     if(item.name === productName) {
//       totalPrice = item.price * item.quantity;
//     }
//   }
//   return totalPrice;
// }

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// console.log(calculateTotalPrice(products, 'Радар')); // 5200

// console.log(calculateTotalPrice(products, 'Дроид')); // 2800


// !Задание 7 - дополнительное, выполнять не обязательно
// Напиши скрипт управления личным кабинетом интернет банка. 
// Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.
/*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
// const transactionsTypes = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   /*
//    * Метод отвечающий за добавление суммы к балансу
//    * Создает объект транзакции и вызывает addTransaction
//    */
//   deposit(amount) {
//     this.balance += amount;
//     const transaction = {
//       id: this.transactions.length + 1,
//       type: transactionsTypes.DEPOSIT,
//       amount,
//     }

//     this.addTransaction(transaction);
//   },

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Создает объект транзакции и вызывает addTransaction
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {
//     if(amount > this.balance) {
//       return alert('Cнятие такой суммы не возможно, недостаточно средств!');
//     } 

//     this.balance -= amount;
//     const transaction = {
//       id: this.transactions.length + 1,
//       type: transactionsTypes.WITHDRAW,
//       amount,
//     }

//     this.addTransaction(transaction);
//   },

//   /*
//    * Метод добавляющий транзацию в свойство transactions
//    * Принимает объект трназкции
//    */
//   addTransaction(transaction) {
//     this.transactions.push(transaction);
    
//   },

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {
//     return this.balance;
//   },

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {
//     for(const transaction of this.transactions) {
//       if(transaction.id === id) {
//         return transaction;
//       } 
//     }
//     alert('Транзакція не знайдена');
//   },

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {
//     let total = 0;
//     // const arrByType = [];
//     for(const transaction of this.transactions) {
//       if(transaction.type === type) {
//         // arrByType.push(transaction);
//         total += transaction.amount;
//       } 
//     }
//     return total;
//   },


// };

// account.deposit(1333);
// // console.log('account :', account);

// account.withdraw(333);
// account.withdraw(300);
// account.withdraw(59);
// account.withdraw(41);
// // account.withdraw(1500);
// console.log('account :', account);
// console.log(account.getTransactionTotal(transactionsTypes.WITHDRAW))
// console.log('account.getBalance() :', account.getBalance());
// // console.log(account.getTransactionDetails(1));
