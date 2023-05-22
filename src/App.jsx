import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import './App.css'
import MainPage from './pages/main/MainPage';
import GlobalStyled from './assets/styles/GlobalStyled';
import Header from './component/header/Header';
import Signup from './pages/sign/signUp';
import DetailPage from './pages/detail/DetailPage';
import TimeCapsules from './pages/timecapsule/TimeCapsules';
import Noticed from './pages/mypage/Noticed';
import SideBar from './component/SideBar';
import Login from './pages/sign/Login';
import Dakku from './pages/timecapsule/dakku';
import Da from './pages/timecapsule/da';

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
						<Route path='/login' element={<Login />} />
						<Route path='/dakku' element={<Dakku />} />
						<Route path='/da' element={<Da />} />
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
