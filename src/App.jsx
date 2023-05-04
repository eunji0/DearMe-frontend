import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { DetailPage } from './pages/detail/DetailPage';

function App() {

	return (
		<>
			<div className='App'>
				<BrowserRouter>
				<Routes>
					<Route path='/detail' element={<DetailPage/>}/>
				</Routes>
				</BrowserRouter>
			</div>
		</>
	)
}

export default App;
