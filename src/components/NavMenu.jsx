import {CustomLink} from "./CustomLink";

function NavMenu({catalog = []}) {

	return (
		<div className='nav-menu'>
			{
				catalog.map(item => (
					// <NavButton key={item.strCategory} {...item} />
					<CustomLink to = {`/category/${item.strCategory}`} className = "btn btn-nav" key={item.strCategory} >{item.strCategory}</CustomLink>
				))
			}
		</div>
	)
}

export {NavMenu}