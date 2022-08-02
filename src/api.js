import { API_URL } from "./config";

const getMealById = async(mealId) => {
	const response = await fetch(API_URL + 'lookup.php?i=' + mealId)
	return await response.json();
}

const getAllCategories = async () => {
	const response = await fetch(API_URL + 'categories.php' )
	// console.log(response)
	return await response.json();
  
}

const getFilteredategory = async (categoryName) => {
	const response = await fetch(API_URL + 'filter.php?c=' + categoryName)
	return await response.json();
}

const getCategoryAbout = async (name) => {
	let result = []

	await fetch(API_URL + 'categories.php')
		.then(response => response.json())
		.then(data => {
			result  = data.meals
		})

	console.log(result)
	return 'ZOPA'
}

export {getMealById, getAllCategories, getFilteredategory, getCategoryAbout}