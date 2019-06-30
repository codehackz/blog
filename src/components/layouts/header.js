import React, { Component } from 'react';
import { AppBar } from "@material-ui/core";

class Header extends Component {
      render() {

        return (
          <div>
          <AppBar color="primary" position="static">
            <h1>My header F111</h1>
          </AppBar>

          </div>
        );
      }
    }

export default Header;
