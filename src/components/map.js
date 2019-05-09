import React from 'react';
import SearchForm from './search-form.js';



class Map extends React.Component{
    constructor(props){
        super(props);
      this.state={
          url:''
        };
    }
    handlec=(searchr)=>{
    console.log(searchr);
    let url=`https://maps.googleapis.com/maps/api/staticmap?center=${searchr.latitude}%2c%20${searchr.longitude}&zoom=13&size=600x300&maptype=roadmap&key=${process.env.REACT_APP_API_KEY}`;
    this.setState({url});
    console.log(this.state.url);
   this.props.onsetLoc(searchr);
    };
    
    render(){
    return (
    <React.Fragment>
    <SearchForm  onDataFetched={this.handlec} />
    <img src={this.state.url}/>
    </React.Fragment>
    )
    }
    
    }

    export default Map;