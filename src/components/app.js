import React from 'react';
import Header from './header.js';
import SearchForm from './search-form.js';
import Map from './map.js';
import Result from './result.js';

class App extends React.Component{
constructor(props){
  super(props);
  this.state={
    location:{},
    DarkSky:[],
    Yelp: []
  };
}
handleWeather = (results) => {
  console.log(results);
  this.setState({ DarkSky: results })
}
setLocation=(res)=>{
  this.setState({
    location: res
  })
};

setYelp=(res)=>{
this.setState({
  Yelp: res
})
};
render(){


  return (
    <React.Fragment>
    <Header/>
    <SearchForm onDataFetched={this.setLocation}  weatherHandler={this.handleWeather} yelpHandler={this.setYelp}/>
    <Map location={this.state.location}/>
    <Result darkSky={this.state.DarkSky} yelps={this.state.Yelp}/>
    </React.Fragment>
  )
}


}

export default App;
