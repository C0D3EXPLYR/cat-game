import React, { useRef }  from 'react';
import { useEffect } from 'react';
import { PropsWithChildren } from 'react';
import './level1.css';
import './levels.css';


const move_int= 12;



function LevelOne(){
    function useKey(key, cb){
      const callbackRef= useRef(cb);

      useEffect(() => {
        callbackRef.current= cb;
      })

      useEffect(() => {
          function handle(event){
            if(event.key === key){
              callbackRef.current(event);
            }
          }
        document.addEventListener("keypress", handle)
        return ()=> document.removeEventListener("keypress", handle);
      }, [key]);
    }
    function handleW(){
      var character= document.getElementById("character");
      console.log("W");
      character.style.top = parseInt(character.style.top) - move_int + 'px';
    }

    function handleA(){
      var character= document.getElementById("character");
      console.log("A");
      character.style.left = parseInt(character.style.left) - move_int + 'px';
    }

    function handleS(){
      var character= document.getElementById("character");
      console.log("S");
      character.style.top = parseInt(character.style.top) + move_int + 'px';
    }

    function handleD(){
      var character= document.getElementById("character");
      console.log("D");
      character.style.left = parseInt(character.style.left) + move_int + 'px';
    }
    useKey("w", handleW);
    useKey("a", handleA);
    useKey("s", handleS);
    useKey("d", handleD);

    alert(window.screen.width); 

    alert(window.screen.height); 
    

  return (
    <img id="character" src="./cat_char.png" alt="cat" style={{position: "absolute", left: 0, top: 0, width: "300px"}}/>
  );
}

export default LevelOne;