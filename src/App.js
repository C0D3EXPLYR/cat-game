import logo from './logo.svg';
import './App.css';
import {Router, Route, Routes, useRoutes, BrowserRouter} from 'react-router-dom';
import React  from 'react';
import { useEffect } from 'react';
import { PropsWithChildren } from 'react';
import LevelOne from './menu/levels/level1';
// import audioSong from "./menu_items/menu_audio.mov";
import Button from 'react';
import MenuPage from './menu/menu';
const baseURL= "http://localhost:3000/";

function App() {
  useEffect(() => {
    switch(window.location.href){
      case baseURL: 
        
      break

      case baseURL+"level1":
        console.log("za");

      break
    }
    
  })
const App = () => {
  const routes = useRoutes([
    { path: '/', element: <MenuPage /> },
    { path: '/level1', element: <LevelOne /> },
    { path: 'usluge', element: <MenuPage /> },
    { path: 'galerija', element: <MenuPage /> },
    { path: 'cjenovnik', element: <MenuPage /> },
    { path: 'kontakt', element: <MenuPage /> }
]);

return routes;
}
  

return (
  <BrowserRouter>
      <App/>
  </BrowserRouter>
);
  //setHomePage('register')
}
export default App;
