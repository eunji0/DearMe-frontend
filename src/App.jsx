import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { DetailPage } from './pages/detail/DetailPage';
import { MainPage } from './pages/main/MainPage';
import GlobalStyled from './assets/styles/GlobalStyled';
import { Header } from './component/header/header';
import { Signup } from './pages/sign/signUp';

function App() {

	return (
		<>
			<div className='App'>
				<GlobalStyled/>
				<BrowserRouter>
				<Header/>
				<Routes>
					<Route path='/' element={<MainPage/>}/>
					<Route path='/detail' element={<DetailPage/>}/>
					<Route path='/signup' element={<Signup/>}/>
				</Routes>
				</BrowserRouter>
			</div>
		</>
	)
}

export default App;
