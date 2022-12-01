import React, { useRef }  from 'react';
import { useEffect } from 'react';
import { PropsWithChildren } from 'react';
import './level1.css';
import './levels.css';
// const img= document.createElement("img");
// img.id= "character";
// //img.src= "cat_char.png";
// img.style.backgroundImage= "url('cat_char.png')";

// img.setAttribute("width", 201);
// img.setAttribute("position", "absolute");

// document.body.appendChild(img);
const move_int= 40;

var PosX= 11; //parseInt(window.getComputedStyle(character).backgroundPositionX);
var move_x= 0; 




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
    function handleA(){
      var character= document.getElementById("character");

      console.log("A");
      // character.style.transform= "rotate(-180deg)";
      // character.style.backgroundPositionX= (PosX - move_int) + "px";
      // PosX= PosX + move_int;

      // move_x= move_x - move_int;
      // character.style.left= move_x + "px";
      character.style.left = parseInt(character.style.left) - 50 + 'px';
    }

    function handleD(){
      var character= document.getElementById("character");

      console.log("D");
      // character.style.transform= "rotate(180deg)";
      // character.style.backgroundPositionX= (PosX + move_int) + "px";
      // PosX= PosX + move_int;

      // move_x= move_x + move_int;
      // character.style.left= move_x + "px";
      character.style.left = parseInt(character.style.left) + 50 + 'px';
    }

    useKey("a", handleA);
    useKey("d", handleD);

  return (
    <img id="character" src="./cat_char.png" alt="cat" style={{positon: "absolute", left: 0, top: 0, width: "170px"}}/>
  );
}

export default LevelOne;