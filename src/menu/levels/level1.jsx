import React  from 'react';
import { useEffect } from 'react';
import { PropsWithChildren } from 'react';
import './level1.css';
import audioSong from "./menu_items/menu_audio.mov";
import Button from 'react';

function level1(){

  return (
    <div className='App'>
      <h1 className='menu_header'>Sandcat on adventure</h1>
      <div className='menu_button_box'>
        <button className='button'>Start</button>
        <button className='button'>Settings</button>
        <button className='button'>Credits</button>
      </div>
    </div>
  );
}

export default level1;