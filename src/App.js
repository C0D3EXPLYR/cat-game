import logo from './logo.svg';
import './App.css';
import React  from 'react';
import { useEffect } from 'react';
import { PropsWithChildren } from 'react';
import {Router, Route, Routes} from 'react-router-dom';
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
    const routes: CustomRoute[] = [

    ];
<div className='App'>
    <Router>
      <Routes>
        {Routes.map((customRoute) => {
          return (
            <Route exact path={customRoute.path} key={"route" + customRoute.path}>
              <Page>{customRoute.html}</Page>  
            </Route>
          );
        })}
        {/* <Route path={baseURL} component={() => <MenuPage/>} />
        <Route path={baseURL+"level1"} component={() => <LevelOne/>} /> */}
      </Routes>
    </Router>
</div>

//    <LevelOne/>
    //<MenuPage/>
  );
}

export default App;
