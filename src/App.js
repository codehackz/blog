import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from '../src/views/main';
import { AppBar } from "@material-ui/core";
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'
import NavBar from '../src/components/layouts/navbar'
import Posts from '../src/components/layouts/posts'

function App() {
  return (
    <div>
     <AppBar color="primary" position="static">
       <Toolbar>
         <TypoGraphy variant="title"
           color="inherit"
         >
          My Header 44444
        </TypoGraphy>
        <NavBar />
       </Toolbar>
     </AppBar>
     <Posts />

    </div>
  );
}

export default App;
