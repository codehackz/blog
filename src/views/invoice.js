import React, { Component } from 'react';
//import Button from '@material-ui/core/Button';
//import AppBar from '@material-ui/core/AppBar';
//import MaterialComponents from '../../common/theme/materialcomponents';
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  TextField,
  AppBar
} from "@material-ui/core";

class Invoice extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }

      handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
      }

      render() {
        return (

          <div>
          <AppBar color="primary" position="static">
            <h1>My header</h1>
          </AppBar>
          <form onSubmit={this.handleSubmit}>



            <label>
              Pick your favorite Invoice:
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>
            </label>
            <input type="submit" value="Submit" />

            <Button variant="contained" color="primary">
             Hello World
           </Button>
          </form>

          </div>
        );
      }
    }

export default Invoice;
