import {Component, useState} from 'react'
import {BrowserRouter, Route, Routes, Redirect} from 'react-router-dom'

import logo from './logo.svg';
import './App.css';
import AddTransaction from './components/AddTransaction';
import CoinList from './components/CoinList';
import Button from 'react-bootstrap/Button';
import Header from './components/Header'
import Container from 'react-bootstrap/Container'
import Transaction from './pages/Transaction'
import List from './pages/List'

function App() {
  

  
  return (
    <div>
      <BrowserRouter>

      <Routes>
        
        <Route path='/' exact element={<Transaction/>} />
        <Route path='exchanges/*' element={<List />}/>
          
       
      </Routes>
      </BrowserRouter>
      
      
      
      
      
    </div>
  );
}

export default App;
