import {CustomLink} from "./CustomLink";

// const setActive = ({isActive}) => isActive ? 'nav-link active' : 'nav-link';

function Header() {

	return (<nav className="blue darken-4">
		<div className="nav-wrapper">
			<a href="https://bugaienko.github.io/spa-router" className="brand-logo right">SPA app</a>

			<ul id = "nav-mobile" className = "center hide-on-med-and-down">
				<li><CustomLink to="/">Home</CustomLink></li>
				<li><CustomLink to="/about">About</CustomLink></li>
				<li><CustomLink to="/contacts">Contacts</CustomLink></li>
			</ul>

			<ul id="nav-mobile" className="left hide-on-med-and-down">
				<li>
					<a href="https://github.com/Bugaienko/spa-router" target="_blank" rel="noreferrer">Repo</a>
				</li>
			</ul>

		</div>
	</nav>)
}
export {Header};