// ASYNCHRONOUS JS
// 📀💿📀📀

// 11-1.
// Реалізуйте функцію getPromise(message, delay), яка приймає текстове повідомлення message і
// цілочисельне значення затримки delay (в мс) і повертає Promise,
//  який чекає задану кількість часу (використовуючи аргумент delay) і завершується повідомленням message.
// Приклад застосування функції:
// getPromise("test promise", 2000).then(function(data) {
//     console.log(data);
// });

const getPromise = (message, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(message), delay);
  });
};

// Результат: через 2 сек в консолі виводиться "test promise"

// 11-2.
// Реалізуйте функцію calcArrProduct(arr), яка приймає масив чисел. Функція повинна повернути Promise,
//  робота якого завершується поверненням добутку елементів масиву,
// якщо вони є типу Numbers, або повідомленням "Error! Incorrect array!" у випадку, якщо хоча б 1 елемент масиву нечисловий.
// Приклад застосування функції:
// calcArrProduct([3,4,5]).then(result => console.log(result)); // 60
// calcArrProduct([5,"user2", 7, 12]).then(result => console.log(result));
// // "Error! Incorrect array!"

const calcArrProduct = (arr) => {
  return new Promise((resolve, reject) => {
    const arrNumbers = arr.every((el) => typeof el === "number");
    const mulArr = arr.reduce((a, b) => a * b);
    if (arrNumbers === true) {
      resolve(mulArr);
    } else if (arrNumbers === false) {
      reject(new Error("Error! Incorrect array!"));
    }
  });
};

// "Error! Incorrect array!"
// 11-3.
// Створіть наступний асинхронний ланцюжок promise:
// new Promise(function (resolve, reject) {
// Запитуємо у користувача number за допомогою prompt()
// Якщо користувач ввів не число - викликаємо reject()
// Якщо користувач ввів число- викликаємо resolve(number)
// }).catch(function (e   rror) {
//    return new Promise(function (resolve, reject) {
// Запитуємо у користувача number, до тих пір, поки він його не введе
// Після вводу числа - викликаємо resolve(number)
//    });
// }).then(function (result) {
// Вивід number у консоль
// });
new Promise(function (resolve, reject) {
  let number = +prompt("Введіть число");
  if (isNaN(number)) {
    reject();
  } else {
    resolve(number);
  }
})
  .catch(function (error) {
    return new Promise(function (resolve) {
      let number;
      while (isNaN(number)) {
        number = +prompt();
      }
      resolve(number);
    });
  })
  .then(function (result) {
    console.log(result);
  });

// 11-4.
// Заданий цикл for, який виводить послідовність чисел від 0 до 10 з випадковим інтервалом (від 0 до N мілісекунд).
//  Використовуючи проміси потрібно змінити цикл так, щоб числа виводилися в строгій послідовності від 0 до 10.
//  Наприклад, якщо виведення нуля займає 4 секунди, а одиниці 2 секунди, то одиниця повинна дочекатися виведення
//  нуля і тільки потім почати свій відлік (щоб дотримуватися послідовності).
// Для розв’язку задачі необзідно застосувати задану функцію delay(i, time), яка повертає проміс, який резолвиться
//  поточним значенням числа-лічильника циклу і, яке виводиться через час time мілісекунд.

// Приклад  роботи:
let delays = [300, 200, 100, 150, 500];
const delay = (i, time) =>
  new Promise((resolve) => setTimeout(() => resolve(i), time));
delays.forEach((value, i) => {
  delay(i, value).then((result) => console.log(result));
});

const delayAsync = (i, time) =>
  new Promise((resolve) => setTimeout(() => resolve(i), time));
async function showNumbers() {
  for (let i in delays) {
    console.log(await delayAsync(i, delays[i]));
  }
}
showNumbers();
