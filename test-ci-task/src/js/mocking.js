import fetchData from './http';

export default function getLevel(userId) {
  let response = fetchData(`https://server/user/${userId}`); // Не уверен, законно ли, что поменял тип объявления переменной)
  response = JSON.parse(response);
  if (response.status === 'ok') {
    return `Ваш текущий уровень: ${response.level}`;
  }
  return 'Информация об уровне временно недоступна';
}
