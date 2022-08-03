import React from 'react';
import {CustomLink} from "./CustomLink";
import '../menu.css'

const Menu = ({header, items = [], active, setActive}) => {
	return (
		<div className= {active ? 'burger-menu active' : 'burger-menu'} onClick={() => setActive(false)}>
			<div className="blur"/>
			<div className="menu__content" onClick={e => e.stopPropagation()}>
				<div className="menu__header">{header}</div>
				<ul>
					<li><CustomLink className='burger-link' to="/"><i className = "material-icons burger-icon">home</i>Home</CustomLink></li>
					<li><CustomLink className='burger-link' to="/about"><i className = "material-icons burger-icon">description</i>About</CustomLink></li>
					<li><CustomLink className='burger-link' to="/contacts"><i className = "material-icons burger-icon">contact_mail</i>Contacts</CustomLink></li>
					<li>
						<a className='burger-link' href="https://github.com/Bugaienko/spa-router" target="_blank" rel="noreferrer"><i className = "material-icons burger-icon">storage</i>Repo</a>
					</li>
				</ul>

			</div>
		</div>
	);
};

export default Menu;