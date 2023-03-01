let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
});

arr[2](); // Вызов функции, this указывает на массив arr, так что функция
          // выведет массив из 3-х элементов - a, d, function().   