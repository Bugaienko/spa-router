import {Link, useNavigate, useParams} from 'react-router-dom'
import  {getFilteredategory, getAllCategories} from '../api'
import {useEffect, useState} from "react";
import {Preloader} from '../components/Preloader'
import {MealList} from '../components/MealList'


function Category() {
	const {name} = useParams();
	const [meals, setMeals] = useState([])
	const [about, setAbout] = useState('')
	const [catalog, setCatalog] = useState([])

	useEffect(() => {
		getAllCategories().then((data) => {
			setCatalog(data.categories)
		})
	}, []);

	useEffect(() => {
	catalog.forEach(cat => {
		// console.log(cat.strCategory, name)
		if (cat.strCategory === name) {
			setAbout(cat.strCategoryDescription)
		}
	})
	}, [catalog, name])



	const navigate = useNavigate();

	const goBack = () => navigate(-1)

	useEffect(() => {
		getFilteredategory(name).then(data => setMeals(data.meals))
	}, [name])

	return <>
		<div className="navigate-bottoms">
		<button className='btn btn-back' onClick={goBack}>Back</button>
		<Link to="/" className = "btn ">Home</Link>
		</div>
		<div className='category-title'>
		<strong>{name}: </strong><span>{about}</span>
		</div>

		{!meals.length ? <Preloader /> : <MealList meals={meals} />}
	</>
}

export {Category}