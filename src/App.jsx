import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { DetailPage } from './pages/detail/DetailPage';
import { MainPage } from './pages/main/MainPage';

function App() {

	return (
		<>
			<div className='App'>
				<BrowserRouter>
				<DetailPage/>
				<Routes>
					<Route path='/' element={<MainPage/>}/>
				</Routes>
				</BrowserRouter>
			</div>
		</>
	)
}

export default App;
