import React, { Component } from 'react';
import Header from '../../src/components/layouts/header';
import Content from '../../src/components/layouts/content';
import Footer from '../../src/components/layouts/footer';

class Main extends Component {

     componentDidMount() {
        //alert('An essay was submitted: xxxxxx ');
     }

      render() {
        console.log("increment");
        return (
          <div>
            <Header />
            <Content page = "" />
            <Footer />
          </div>
        );
      }
    }

export default Main;
