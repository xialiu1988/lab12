import React from 'react';
// import SearchForm from './search-form.js';



class Map extends React.Component{
    constructor(props){
        super(props);
      this.state={
        location:{},
        };
    }
   
    render(){
    return (
    <React.Fragment>
    <img src={"https://maps.googleapis.com/maps/api/staticmap?center=" + this.props.location.latitude + "%2c%20" + this.props.location.longitude + `&zoom=13&size=600x300&maptype=roadmap&key=${process.env.REACT_APP_API_KEY}`}/>
    </React.Fragment>
    )
    }
    
    }

    export default Map;