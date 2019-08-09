import React from "react";
import Header from "../components/Header";
import PageContent from "../components/PageContent";

// import { Container } from './styles'; 

export default class Home extends React.Component {
    render() {
        return (
            <div>                
                <Header headerTitle="Precision Engineering Laboratory" />
                <PageContent />
                
            </div>
        );
    }
}