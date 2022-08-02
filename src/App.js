import { Routes, Route,  } from "react-router-dom";


import {Home} from './pages/Home'
import {Contact} from './pages/Contact'
import {About} from './pages/About'
import {NotFound} from "./pages/NotFound";
import {Layout} from "./components/Layout";
import {Category} from './pages/Category'
import {MealDetail} from "./pages/MealDetail";

function App() {
	return (
		<>
		{/*<Header/>*/}
		{/*<main className="container content">*/}

		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="contacts" element={<Contact />} />
				<Route path="category/:name" element={<Category />} />
				<Route path="meal/:mealId" element={<MealDetail />} />
				<Route path="about" element={<About />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>

		{/*</main>*/}
		{/*<Footer/>*/}
	</>
	);

}

export default App;
