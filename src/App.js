import logo from './logo.svg';
import './App.css';
import React  from 'react';
import { useEffect } from 'react';
import { PropsWithChildren } from 'react';
import './menu/menu.css';
// import audioSong from "./menu_items/menu_audio.mov";
import Button from 'react';
import MenuPage from './menu/menu';

function App() {
  return (
    <MenuPage/>
  );
}

export default App;
