import React, { useRef }  from 'react';
import { useEffect } from 'react';
import { PropsWithChildren } from 'react';
import './level1.css';
import './levels.css';
import standing_cat from "../menu_items/cat_char.png";
import running_cat_left from "../menu_items/runningcat_left.gif";
import running_cat_right from "../menu_items/runningcat_right.gif";

const move_int= 12;


function LevelOne(){
  var imageSource=  standing_cat;

  const bodyElement= document.body;
  bodyElement.classList.remove("menu");
  bodyElement.classList.add("level_one");
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
      console.log("W");
      var character= document.getElementById("character");
      // key code letter A
      if(character.classList != "animate"){   //&& gfg.keyCode === 65
        character.style.left = parseInt(character.style.left) + move_int + 'px';
        // key code letter D
      }else if(character.classList != "animate"){   //&& gfg.keyCode === 68
        character.style.left = parseInt(character.style.left) - move_int + 'px';
      }
        character.classList.add("animate");
        setTimeout(() => {
          character.classList.remove("animate");
        }, 1000);
    }

    function handleA(){
      console.log("A");
      var character= document.getElementById("character");
      if(character.src != running_cat_left){
        character.src= running_cat_left;
      }
      character.style.left = parseInt(character.style.left) - move_int + 'px';
    }

    // function handleS(){
    //   console.log("S");
    //   character.style.top = parseInt(character.style.top) + move_int + 'px';
    // }

    function handleD(){
      console.log("D");
      var character= document.getElementById("character");
      if(character.src != running_cat_right){
        character.src= running_cat_right;
      }
      character.style.left = parseInt(character.style.left) + move_int + 'px';
    }
    useKey("w", handleW);
    useKey("a", handleA);
    //useKey("s", handleS);
    useKey("d", handleD);

    console.log(window.screen.width); 

    console.log(window.screen.height); 

  return (
   
    <img id="character" src= {imageSource}alt="cat" style={{position: "absolute", left:  "-84px", top: "636px", width: "300px"}}/>
  );
}

export default LevelOne;