import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Add from "./components/Add";
import List from "./components/List";
import { useAppDispatch } from './store/store';
import { fetchPerson } from './store/features/personSlice';

function App() {
  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(fetchPerson())
  })
  return (
    <div className="App">
      Learn React
      <Add />
      <List />
      {/* <Products /> */}
      {/* <Cart /> */}
    </div>
  );
}

export default App;
