import logo from './logo.svg';
import './App.css';
import React  from 'react';
import { useEffect } from 'react';
import { PropsWithChildren } from 'react';
import './menu/menu.css';
import {Router, Route} from 'react-router-dom';
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

  return (
    // <Router>
    //     <Route exact path="http://localhost:3000/">
    //       <MenuPage/>
    //     </Route>
    //     <Route exact path="http://localhost:3000/level1">
    //     <LevelOne/> 
    //     </Route>
    // </Router>  
    <LevelOne/>
  );
}

export default App;
