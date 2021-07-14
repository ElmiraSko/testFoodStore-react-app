import { API_URL } from './config';

// получение блюда по id
const getMealById = async (mealId) => {
 const respons = await fetch(API_URL + 'lookup.php?i=' + mealId);
 return await respons.json();
};
// получение всех категорий
const getAllCategories = async () => {
    const respons = await fetch(API_URL + 'categories.php');
    // console.log(respons);
    // console.log(respons.status);
    const responsJson = await respons.json();
    // console.log(responsJson);
    return responsJson;
};
// получение списка блюд по выбранной категорий
const getFilteredCategories = async (categoryName) => {
    const respons = await fetch(API_URL + 'filter.php?c=' + categoryName);
    return await respons.json();
};
// получение списка блюд по конкретной стране
const getMealsByArea = async (areaName) => {
    const respons = await fetch(API_URL + 'filter.php?a=' + areaName);
    return await respons.json();
};
// получение всех стран
const getAllArea = async () => {
    const respons = await fetch(API_URL + 'list.php?a=list');
    return await respons.json();
};

export { getMealById, getAllCategories, getFilteredCategories, getAllArea, getMealsByArea }