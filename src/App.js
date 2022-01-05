import React from 'react';
import {Route, Routes} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import RegisterPage from './components/registerPage';
import HomePage from './components/homePage';

class App extends React.Component {
  render () {
  return (
      <Routes>
        <Route path='/' element={<RegisterPage />} />
        <Route path='/home' element={<HomePage />} />
      </Routes>
    );
  } 
}

export default App;
