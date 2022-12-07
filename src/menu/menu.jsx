import React  from 'react';
import { useEffect } from 'react';
import { PropsWithChildren } from 'react';
import './menu.css';
// import audioSong from "./menu_items/menu_audio.mov";
import Button from 'react';
import axios from "axios";

const client= axios.create({baseURL: "http://127.0.0.1:8000"});

function handleStart(){
  client
  .post("/api/test")
  .then((response) => {
    console.log(response.data);
    window.location.href='/level1';
  })
  .catch((err) => {
    console.log(err);
  })
}
// TO DO LIST
// Make music for the menu 
// Fix jump bug
// Change css file on different route page 
// Make platforms
// Make a scroll background image inf scroll 



function MenuPage(){
  const bodyElement= document.body;
  bodyElement.classList.remove("level_one");
  bodyElement.classList.add("menu");

  return (
    <div className='App'>
      <h1 className='menu_header'>Sandcat on adventure</h1>
      <div className='menu_button_box'>
        <button className='button' onClick={handleStart}>Start</button>
        <button className='button'>Settings</button>
        <button className='button'>Credits</button>
      </div>
    </div>
  );
  

{/* <audio id="backgroundMusic">
<source src={audioSong} />
</audio> */}

// useEffect(() => {
  
//   document.getElementById("backgroundMusic").play().catch((error) => {
//     document.addEventListener('click', () => {
//       document.getElementById("backgroundMusic").play()
//     }, { once: true } );

// }); 
  

// //FooBar.render(<AudioPlayer />, document.getElementById('root'));


//   // return (
//   //   <div className="App">
//   //     <header className="App-header">
//   //       <img src={logo} className="App-logo" alt="logo" />
//   //       <p>
//   //         Edit <code>src/App.js</code> and save to reload.
//   //       </p>
//   //       <a
//   //         className="App-link"
//   //         href="https://reactjs.org"
//   //         target="_blank"
//   //         rel="noopener noreferrer"
//   //       >
//   //         Learn React
//   //       </a>
//   //       <audio src="" controls/>
//   //     </header>
//   //   </div>
//   // );

};

export default MenuPage;

