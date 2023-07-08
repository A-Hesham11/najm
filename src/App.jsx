import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import { Fragment } from 'react';
import Home from './pages/home/Home';
import Dashboard from './pages/dashboard/Dashboard';

function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path="/" 
          element={
            <Fragment>
              <Header />
              <Home/>
            </Fragment>} 
          />
          <Route path="/dashboard" 
            element={
              <Fragment>
                <Header />
                <Dashboard/>
              </Fragment>} 
            />
      </Routes>
    </div>
  )
}

export default App
