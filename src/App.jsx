import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { DetailPage } from './pages/detail/DetailPage';
import { MainPage } from './pages/main/MainPage';
import GlobalStyled from './assets/styles/GlobalStyled';

function App() {

	return (
		<>
			<div className='App'>
				<GlobalStyled/>
				<BrowserRouter>
				<Routes>
					<Route path='/' element={<MainPage/>}/>
					<Route path='/detail' element={<DetailPage/>}/>
				</Routes>
				</BrowserRouter>
			</div>
		</>
	)
}

export default App;
