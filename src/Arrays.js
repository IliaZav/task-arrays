/*
  Преобразует строку чисел в массив, сортирует и возвращает строку
*/
export function arraySorting(data) {
  // Преобразуем строку в массив чисел
  const numbers = data.split(',').map(Number);
  // Сортируем числа по возрастанию
  const sorted = numbers.sort((a, b) => a - b);
  // Возвращаем строку с разделителями
  return sorted.join(',');
}

/*
  Фильтрует числа, оставляя только ≤100
*/
export function arrayFiltering(data) {
  return data.filter(num => num <= 100);
}

/*
  Чередует элементы двух массивов
*/
export function arrayPushing(array1, array2) {
  const result = [];
  
  // Для каждого индекса (0-4) добавляем элементы из обоих массивов
  for (let i = 0; i < 5; i++) {
    result.push(array1[i], array2[i]);
  }
  
  return result;
}