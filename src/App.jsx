import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import './App.css'
import MainPage from './pages/main/MainPage';
import GlobalStyled from './assets/styles/GlobalStyled';

import  Header from './component/header/Header';
import  Signup  from './pages/sign/Signup';
import {Login} from './pages/sign/Login';
import Dakku  from './pages/timecapsule/Dakku';
import DetailPage from './pages/detail/DetailPage';
import TimeCapsules from './pages/timecapsule/TimeCapsules';
import Noticed from './pages/mypage/Noticed';
import SideBar from './component/SideBar';
import Profile from './pages/mypage/Profile';
import Management from './pages/mypage/Management';

function App() {

	return (
		<>
			<div className='App'>
				<GlobalStyled />
				<BrowserRouter>
				<Header/>
				<Routes>
					<Route path='/' element={<MainPage/>}/>
					<Route path='/detail' element={<DetailPage/>}/>
					<Route path='/signup' element={<Signup/>}/>
					<Route path='/login' element={<Login/>}/>
					<Route path='/dakku' element={<Dakku/>}/>
					<Route path='/timecapsules' element={<TimeCapsules />} />
					<Route element={<MypageLayout />}>
					<Route path="/notice" element={<Noticed />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="/management" element={<Management />} />
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
    <div style={{display: "flex", flexDirection:"row"}}>
      <SideBar />
          {<Outlet />}
    </div>
  )
}
