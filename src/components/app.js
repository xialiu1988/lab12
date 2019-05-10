import React from 'react';
import Header from './header.js';
import SearchForm from './search-form.js';
import Map from './map.js';


class App extends React.Component{
constructor(props){
  super(props);
  this.state={
    location:{},
    DarkSky:[]
  };
}
handleFormWeatherRequest = (results) => {
  console.log(results);
  this.setState({ DarkSky: results })
}
setLocation=(res)=>{
  this.setState({
    location: res
  })
};

render(){


  return (
    <React.Fragment>
    <Header/>

    {/* <SearchForm weatherHandler={this.handleFormWeatherRequest}/> */}
    <Map onsetLoc={this.setLocation}/>
    </React.Fragment>
  )
}


}

export default App;
