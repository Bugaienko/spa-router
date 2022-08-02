import {Link, useMatch} from "react-router-dom";

const CustomLink = ({children, to, className='', ...props}) => {
	const match = useMatch(to)

	return (
	  <Link
		  to={to}
		  className={match ? className + ' active' : className}
		  {...props}
	  >
		  {children}
	  </Link>
  )
}
export {CustomLink}