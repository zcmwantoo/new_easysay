import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter , Route } from 'react-router-dom'
import styles from './App.css';
import './global.css'
import Home from './pages/home/home'
import About from './pages/about'
import Login from './pages/login'
import store from './store/index'

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Route path='/' exact component={Home}></Route>
				<Route path='/about' component={About}></Route>
				<Route path='/login' component={Login}></Route>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
