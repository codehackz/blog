import React, { Component } from 'react';
import Header from '../../src/components/layouts/header';
import Content from '../../src/components/layouts/content';
import Footer from '../../src/components/layouts/footer';

class Main extends Component {
      render() {
        return (
          <div>
            <Header />
            <Content />
            <Footer />
          </div>
        );
      }
    }

export default Main;
