import React, { Component } from 'react';
import { AppBar, Button } from "@material-ui/core";

class Tutorial extends Component {


      render() {

        const title      = this.props.title;
        const category   = this.props.category;
        const datePosted = this.props.datePosted;

        return (
          <div>
              <Button color="primary">Hello World</Button>
                {title}, {category}, {datePosted}
          </div>
        );
      }
    }


export default Tutorial;
