import React from "react";
import PageContent from "../components/PageContent";
import Carousel from "../components/Carousel";

// import { Container } from './styles'; 

export default class Home extends React.Component {
    render() {
        return (
            <div>                
                {/*<Header headerTitle="Precision Engineering Laboratory" />*/}
                <Carousel/>
                <PageContent />                
            </div>
        );
    }
}