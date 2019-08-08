import React from 'react';

import Header from "../components/Header";
import PageContent from "../components/PageContent";
import Footer from "../components/Footer";
import NavBar from '../components/NavBar';

// import { Container } from './styles';

export default class About extends React.Component {
    render() {
        return (
            <div className="App" >
                <NavBar/>
                <Header headerTitle="About Us" />
                <PageContent />
                <Footer />
            </div>
        );
    }
}