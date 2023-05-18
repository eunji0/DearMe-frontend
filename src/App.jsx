import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import MainPage from './pages/main/MainPage';
import GlobalStyled from './assets/styles/GlobalStyled';
import Header from './component/header/Header';
import Signup from './pages/sign/signUp';
import DetailPage from './pages/detail/DetailPage';
import TimeCapsules from './pages/timecapsule/TimeCapsules';

function App() {

	return (
		<>
			<div className='App'>
				<GlobalStyled />
				<BrowserRouter>
					<Header />
					<Routes>
						<Route path='/' element={<MainPage />} />
						<Route path='/detail' element={<DetailPage />} />
						<Route path='/signup' element={<Signup />} />
						<Route path='/timecapsules' element={<TimeCapsules />} />
					</Routes>
				</BrowserRouter>
			</div>
		</>
	)
}

export default App;
