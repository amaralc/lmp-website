import React, { Component } from 'react';

import Header from "../components/Header";
import PageContent from "../components/PageContent";
import Footer from "../components/Footer";

// import { Container } from './styles';

export default class About extends Component {
  render() {
    return (
      <div className="App">
        <Header headerTitle="About Us" />
        <PageContent />
        <Footer />
      </div>
    );
  }
}
