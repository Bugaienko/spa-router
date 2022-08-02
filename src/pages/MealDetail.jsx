import {useParams, useNavigate, Link} from 'react-router-dom'
import {getMealById} from '../api'
import {useEffect, useState} from "react";
import {Preloader} from '../components/Preloader'

function MealDetail() {
	const {mealId} = useParams();
	const [recipe, setRecipe] = useState({});

	const navigate = useNavigate();
	const goBack = () => navigate(-1)

	useEffect(() => {
		getMealById(mealId).then(data => setRecipe(data.meals[0]))
	}, [mealId])

	return <>
		{!recipe.idMeal ? <Preloader/> : (
			<div className = 'recipe'>
				<div className = 'recipe-head'>
					<img className = 'img-recipe' src = {recipe.strMealThumb} alt = {recipe.strMeal}/>
					<h3>{recipe.strMeal}</h3>
					<h6>Category: <Link to={`/category/${recipe.strCategory}`} className = "btn btn-small">{recipe.strCategory}</Link></h6>
					{recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null}
				<p className = 'recipe-text'>{recipe.strInstructions}</p>
				</div>

				<div className = 'recipe-table'>
					<table className = 'striped centered'>
						<thead>
						<tr>
							<th>Ingredient</th>
							<th>Measure</th>
						</tr>
						</thead>
						<tbody>
						{
							Object.keys(recipe).map(key => {
								if (key.includes('Ingredient') && recipe[key]) {
									let key2 = `strMeasure${key.slice(13,)}`
									// if (key.length === 15) {
									// 	key2 = key2 + key.slice(-2)
									// } else if (key.length === 14) {
									// 	key2 = key2 + key.slice(-1)
									// }

									return (
										<tr key = {key}>
											<td>{recipe[key]}</td>
											<td>{recipe[key2]}</td>
										</tr>
									);
								}
								return null;
							})
						}
						<tr>
							<td></td>
						</tr>

						</tbody>
					</table>
				</div>

				{recipe.strYoutube ? (
					<div className = 'row'>
						<h5>Video Recipe </h5>
						<iframe title = {mealId} src = {`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`}
								  allowFullScreen/>
					</div>
				) : null}
			</div>
		)}
		<button className = 'btn btn-back' onClick = {goBack}>Go Back</button>


	</>
}

export {MealDetail}

