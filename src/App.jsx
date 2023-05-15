import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { DetailPage } from './pages/detail/DetailPage';
import { MainPage } from './pages/main/MainPage';
import GlobalStyled from './assets/styles/GlobalStyled';
import { Header } from './component/header/header';
import { Signup } from './pages/sign/Signup';
import { Login } from './pages/sign/Login';
import  Dakku  from './pages/timecapsule/dakku';
import Da from './pages/timecapsule/da';

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
					<Route path='/login' element={<Login/>}/>
					<Route path='/dakku' element={<Dakku/>}/>
					<Route path='/da' element={<Da />}/>
				</Routes>
				</BrowserRouter>
			</div>
		</>
	)
}

export default App;
