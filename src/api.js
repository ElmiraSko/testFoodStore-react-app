import { API_URL } from './config';

const getMealById = async (mealId) => {
 const respons = await fetch(API_URL + 'lookup.php?i=' + mealId);
 return await respons.json();
};

const getAllCategories = async () => {
    const respons = await fetch(API_URL + 'categories.php');
    return await respons.json();
};

const getFilteredCategories = async (categoryName) => {
    const respons = await fetch(API_URL + 'filter.php?c=' + categoryName);
    return await respons.json();
};

export { getMealById, getAllCategories, getFilteredCategories }