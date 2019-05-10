import React from 'react';
import superagent from 'superagent';
// import Result from './result.js';

class SearchForm extends  React.Component{

constructor(props){
    super(props);
    this.state={
        keyword: 'nothing yet',
       location:{},
       DarkSky: [],
       Yelp:[]
    };
}

handleChange=e=>{
    let keyword=e.target.value;
    this.setState({keyword:keyword});
    };


handleSubmit=async e=>{
    e.preventDefault();
    let data=this.state.keyword;
    console.log(data);
    const response= await superagent.get('https://citylab09.herokuapp.com/location',{ method: 'GET', data: data });
    const body = await response;
    if (response.status !== 200) throw Error(body.message);
    let formatted_address=body.body.formatted_query;
    let latitude=body.body.latitude;
    let longitude=body.body.longitude;
    this.setState({
        location:{
         formatted_address,
        latitude,
         longitude
     }
    })
    this.props.onDataFetched(this.state.location);
     console.log(this.state.location);
     this.callApis();
}


callApis=async ()=>{
    await this.getWeather();
    await  this.getYelp();
}

getWeather = async () => {
    const response= await superagent.get('https://citylab09.herokuapp.com/weather',{ method: 'GET', data: this.state.location });
    const body = await response;
      this.setState({
        DarkSky:body.body
      });
      this.props.weatherHandler(this.state.DarkSky);     
  }

  getYelp = async () => {
    const response= await superagent.get('https://citylab09.herokuapp.com/yelp',{ method: 'GET', data: this.state.keyword });
    const body = await response;
      this.setState({
        Yelp:body.body
      });
      console.log(this.state.Yelp);
      this.props.yelpHandler(this.state.Yelp);
      
  }


render() {
    return ( 
        <>
        <form onSubmit={this.handleSubmit} >
        <input onChange={this.handleChange}/>
        <button type="submit">Search</button>
        </form>
        </>
    );
  }

}


export default SearchForm;