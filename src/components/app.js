import React from 'react';
import Header from './header.js';
import Map from './map.js';
import Result from './result.js';

class App extends React.Component{
constructor(props){
  super(props);
  this.state={
    location:{}
  };
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
    <Map onsetLoc={this.setLocation}/>
    <Result/>
    </React.Fragment>
  )
}


}

export default App;
