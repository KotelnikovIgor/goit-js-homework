import users from './users.js';
console.log('users :', users);

// !Задание 1
// Получить массив имен всех пользователей (поле name).

//!Решение
// const getUserNames = users.map((el) => el.name);
// const getUserNames = users => {
//   //твой код
//   const usersArr = users.map(el => el.name);
//   return usersArr;
// };
// console.log(getUserNames(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony']

// !Задание 2
// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

// //!Решение
// const getUsersWithEyeColor = (users, color) => {
//   // твой код
//   const locorArr = users
//   .filter((el) => el.eyeColor === color)
//   .map((el) => el.name); 
//     return locorArr;
// };

// console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// !Задание 3
// Получить массив имен пользователей по полу (поле gender).

// //!Решение
// const getUsersWithGender = (users, gender) => {
//   // твой код
//   const genderArr = users 
//   .filter((el) => el.gender === gender)
//   .map((el) => el.name);
    // return genderArr;
// };

// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotso]

// !Задание 4
// Получить массив только неактивных пользователей (поле isActive).

//!Решение
// const getInactiveUsers = users => {
//   // твой код
//   const activArr = users.filter((el) => !el.isActive);
    // return activArr;
// };

// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// !Задание 5
// Получить пользоваля (не массив) по email (поле email, он уникальный).

//!Решение
// const getUserWithEmail = (users, email) => {
//   // твой код
//   const userArr = users.find((el) => el.email === email);
//   return userArr;
// };

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// !Задание 6
// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

//!Решение
// const getUsersWithAge = (users, min, max) => {
//   // твой код
//  const newArr = users
//  .filter((el) => el.age >= min && el.age <= max);
//  return newArr;
// };

// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// !Задание 7
// Получить общую сумму баланса (поле balance) всех пользователей.

//!Решение
// const calculateTotalBalance = users => {
//   // твой код
//   const newArr = users.reduce((totalBalance, user) => totalBalance + user.balance, 0);
//   return newArr;
// };

// console.log(calculateTotalBalance(users)); // 20916

// !Задание 8
// Массив имен всех пользователей у которых есть друг с указанным именем.

//!Решение
// const getUsersWithFriend = (users, friendName) => {
//   // твой код
//   const friendArr = users
//   .filter(user => user.friends
//     .some(friend => friend === friendName))
//   .map(user => user.name);  
//   return friendArr;
// };

// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// !Задание 9
// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

//!Решение
// const getNamesSortedByFriendsCount = users => {
//   // твой код
//   const newArr = users 
//   .sort((a, b) => a.friends.length - b.friends.length)
//   .map((user) => user.name);
//   return newArr;
// };

// console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// !Задание 10
// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и 
// они должны быть отсортированы в алфавитном порядке.

//!Решение

// const getSortedUniqueSkills = (users) => {
//   // твой код
//   const skills = [];
//   users.forEach(element => {
//     skills.push(...element.skills);
//   });
//   console.log('skills :', skills);

//   const unique = [];
//   skills.forEach(el => {
//     // !unique.includes(el) ? unique.push(el) : null; 
//     !unique.includes(el) && unique.push(el); 
//   });
//   console.log('unique :', unique);
// };

// const getSortedUniqueSkills = (users) => {
//   // твой код
//   const unique = users.reduce((acc, el) => {
//     acc.push(...el.skills);
//     return acc;
//   }, []).reduce((acc, el) =>{
//     !acc.includes(el) && acc.push(el);
//     return acc;
//   }, []).sort();

//   console.log('unique :', unique);
// };

// getSortedUniqueSkills(users)
// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 
// 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
