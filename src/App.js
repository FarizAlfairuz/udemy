import React, { Component } from 'react';
import Routes from './config/Routes'
import NavMobile from './mobileView/NavMobile'
import './assets/css/course.css'


class App extends Component {
  constructor(){
    super();
    this.state = {
      toggleNav: false,
      opacity:false
    };
  }

  toggleBody = () => {
    this.setState({toggleNav:false,opacity:false})
  }
  toggleTruncatedNav = () => {
    if(this.state.opacity==false){
      this.setState({toggleNav:!this.state.toggleNav,opacity:true})
    }else{
      this.setState({toggleNav:!this.state.toggleNav,opacity:false})
    }
  }

  render() {

    return (
      <>
      <NavMobile
            toggleNav={this.state.toggleNav}
            toggleTruncatedNav={this.toggleTruncatedNav}
          />
      <div onClick={this.toggleBody} className={this.state.opacity ? 'home-opacity' : ''}>
        <Routes/>
      </div>
      </>
    );
  }
}

export default App;
