import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Search({cb = Function.prototype}) {
	const [value, setValue] = useState('')

	const navigate = useNavigate();

	const handleKey = (e) => {
		if (e.key === 'Enter') {
			handleSubmit();
		}
	}

	const handleSubmit = () => {
		cb(value)
	}

	const handleClear = () => {
		setValue('')
		navigate("/")

	}

	return <div className="row offset80">
		<div className='input-field col s12'>
			<input
				type='search'
				id='search-field'
				placeholder='Search category'
				onKeyDown={handleKey}
				onChange={(e) => setValue(e.target.value)}
				value={value}
			/>
			<button className='btn btn-search' onClick={handleSubmit}>Search</button>
			<button className='btn btn-clear' onClick={handleClear}>Clear</button>
		</div>
	</div>
}

export {Search}