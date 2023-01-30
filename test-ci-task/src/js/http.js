export default function fetchData(url) {
  console.log(url); // ESlint ругался на неиспользуемый аргумент
  throw new Error('Mock this!');
}
// Этот модуль не окрыт тестами, но вроде это и не требуется же?
