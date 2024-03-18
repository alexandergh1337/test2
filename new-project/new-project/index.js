// 9
const name = "Александр Платонов";
console.log(`Привет, ${name}!`);

// 10
function isEven(num) {
  return num % 2 === 0;
}

// 11
const person = {
  name: "Александр Платонов",
  age: 18,
  city: "Великий Новгород"
};

console.log(`Меня зовут ${person.name}. Мне ${person.age} лет. Я живу в городе ${person.city}.`);

// 12
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(`Сумма чисел в массиве: ${sum}`);

// задание по вариантам: 9
const book = {
    title: "Евгений Онегин",
    author: "Пушкин Александр Сергеевич", 
    year: 1833
  };
  
  const [lastName, firstName, patronymic] = book.author.split(" ");
  const initials = `${lastName} ${firstName[0]}.${patronymic[0]}.`;
  
  console.log(`Книга "${book.title}" была написана ${initials} в ${book.year}`);