import {CustomLink} from '../components/CustomLink'

function CategoryItem(props) {
	const {
		// idCategory,
		strCategory,
		strCategoryThumb,
		strCategoryDescription
	} = props;



	return <div className = "card">
		<div className = "card-image">
			<img src = {strCategoryThumb} alt = {strCategory}/>
		</div>

		<div className = "card-content">
			<span className = "card-title">{strCategory}</span>
			<p>{strCategoryDescription.slice(0, 85)}...</p>
		</div>
		<div className = "card-action">
			<CustomLink to = {`/category/${strCategory}`} className = "btn" >Watch category</CustomLink>
		</div>
	</div>
}

export {CategoryItem};
