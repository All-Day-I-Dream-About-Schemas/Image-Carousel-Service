import React from 'react';
import LeftArrow from './leftArrow.jsx';
import RightArrow from './rightArrow.jsx';
import Carousel from './carousel.jsx';
const axios = require('axios');
const endpoint = '/kix';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      imgSlides: [],
      thumbNails: [],
      options: [],


    };
    this.fetchDefaultData = this.fetchDefaultData.bind(this);
    this.clickColorOption = this.clickColorOption.bind(this);
    this.clickThumbnail = this.clickThumbnail.bind(this);
    this.changeStyle = this.changeStyle.bind(this);
  }
  fetchDefaultData() {
    axios.get(endpoint)
      .then(console.log)
      .catch(console.log);
  }
  clickColorOption() {
    axios.post(endpoint)
      .then(console.log)
      .catch(console.log);
  }
  clickThumbnail() {

  }
  changeStyle() {

  }
  scrollRight() {

  }
  scrollLeft() {

  }

  componentDidMount() {
    // this.fetchDefaultData();
  }

  render() {
    return (
      <div>
        {/* <Header /> */}
        <img className="logo"src="adidaslogo.png" />
        <LeftArrow/>
        <RightArrow />
      </div>
    );
  }
}

export default App;