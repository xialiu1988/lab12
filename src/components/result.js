import React from 'react';
import superagent from 'superagent';


class Result extends React.Component{

constructor(props){
    super(props);

    this.state={
    location:{}
      };
      
}
handleWeather=async ()=>{
    console.log(this.props.location);
    const response= await superagent.get('https://citylab09.herokuapp.com/weather',{ method: 'GET', data: this.props.location });
    const body = await response;
 
    if (response.status !== 200) throw Error(body.message);

 };

componentDidMount(){
 this.handleWeather();
}

render(){
 return(
     <React.Fragment>
     <h3>Results from the Dark Sky API</h3>
    </React.Fragment>
 )
}
}


export default Result;