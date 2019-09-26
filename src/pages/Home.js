import React from "react";
import PageContent from "../components/PageContent";
import Slider from "../components/Slider";

// import { Container } from './styles';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        {/*<Header headerTitle="Precision Engineering Laboratory" />*/}
        <Slider />
        <PageContent />
      </div>
    );
  }
}
