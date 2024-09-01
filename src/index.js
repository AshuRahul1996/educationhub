import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import{ BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Store from './redux/Store';
// import TopNavBar from './Components/TopNavBar';
// import HeadeBrand from './Components/HeaderBrand'
// import HeroSection from './Components/HeroSection'
// import NavBar from './Components/NavBar'
// import TopNavBar from './Components/TopNavBar'
import {Provider} from 'react-redux'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    {/* <App /> */}

  
    {/* <HeadeBrand/> */}
   
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      {/* <Route path='/home' element={<Home/>}/> */}
      {/* <TopNavBar/> */}

      
    </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
