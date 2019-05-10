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
    Yelp: [],
    Events:[],
    Movies:[]
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

setEvents=(res)=>{
  this.setState({
    Events: res
  })
}

setMovie=(res)=>{
  this.setState({
    Movies: res
  })
}


render(){


  return (
    <React.Fragment>
    <Header/>
    <SearchForm onDataFetched={this.setLocation}  weatherHandler={this.handleWeather} yelpHandler={this.setYelp}  eventsHandler={this.setEvents} movieHandler={this.setMovie}/>
    <Map location={this.state.location}/>
    <Result darkSky={this.state.DarkSky} yelps={this.state.Yelp} events={this.state.Events}  movies={this.state.Movies}/>
    </React.Fragment>
  )
}


}

export default App;
