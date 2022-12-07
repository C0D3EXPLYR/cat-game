import React, { useRef }  from 'react';
import { useEffect } from 'react';
import { PropsWithChildren } from 'react';
import './level1.css';
import './levels.css';


    class Platform extends React.Component {
        constructor(){
          this.position = {
            x:0,
            y:0
          }
  
          this.width= 200;
          this.height= 20;
          this.state= {color: "blue"}
        }
        render() {
          return new Platform();
        }
      }
  
      export default Platform;
  
      const platform= new Platform();