import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import './App.css'
import MainPage from './pages/main/MainPage.jsx';
import GlobalStyled from './assets/styles/GlobalStyled';
import Header from './component/header/Header';
import Signup from './pages/sign/Signup';
import TimeCapsules from './pages/timecapsule/TimeCapsules';
import Noticed from './pages/mypage/Noticed';
import SideBar from './component/SideBar';
import NoteWeb from './pages/diary/NoteWeb';

function App() {

	return (
		<>
			<div className='App'>
				<GlobalStyled />
				<BrowserRouter>
					<Header />
					<Routes>
						<Route path='​/timeschedule​/{userName}​/{year}​/{month}​/{day}' element={<MainPage />} />
						<Route path='/signup' element={<Signup />} />
						<Route path='/timecapsules/:id' element={<TimeCapsules />} />
						<Route path='/a' element={<NoteWeb />}/>
						<Route element={<MypageLayout />}>
							<Route path="/notice" element={<Noticed />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</div>
		</>
	)
}

export default App;

const MypageLayout = () => {
	return (
		<div style={{ display: "flex", flexDirection: "row" }}>
			<SideBar />
			{<Outlet />}
		</div>
	)
}
