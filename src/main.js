import React,{Component} from 'react';
import superagent from 'superagent';



class Search extends React.Component{
constructor(props){
    super(props);

    this.state={
        keyword: 'nothing yet',
       location:{}
    };

    this.handleSubmit=this.handleSubmit.bind(this)
}


handleChange=e=>{
let keyword=e.target.value;
this.setState({keyword:keyword});
};

 
handleSubmit=async e=>{
e.preventDefault();
// let ApiKey=`${process.env.REACT_APP_API_KEY}`;
let data=await superagent.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.keyword}&key=${process.env.REACT_APP_API_KEY}`);
let formatted_address= data.body.results[0].formatted_address;
let latitude=data.body.results[0].geometry.location.lat;
let longitude=data.body.results[0].geometry.location.lng;
    
this.setState({
    location:{
        formatted_address,
        latitude,
        longitude
    }
})
console.log(this.state.location);
this.props.onDataFetched(this.state.location);
};


render(){
return (
<div>
    <form onSubmit={this.handleSubmit} >
    <input onChange={this.handleChange}/>
    <button type="submit">Search</button>
    </form>
</div>
)
}

}


class Map extends React.Component{
constructor(props){
    super(props);
this.handlec=this.handlec.bind(this);
  this.state={
      url:''
    };
}
handlec(searchr){
    console.log(searchr.latitude);
let url=`https://maps.googleapis.com/maps/api/staticmap?center=${searchr.latitude}%2c%20${searchr.longitude}&zoom=13&size=600x300&maptype=roadmap
&key=${process.env.REACT_APP_API_KEY}`;
this.setState({url});
}

render(){
return (
<React.Fragment>
<Search  onDataFetched={this.handlec} />
<h1>Hey map is working!!!!!</h1>
<img src={this.state.url}/>
</React.Fragment>
)
}

}


class Result extends React.Component{
constructor(props){
    super(props);
}
render(){
return (
   <section>
    <p>Result: </p>
   </section>
)
}
}

class  Main extends React.Component{
render(){
  return (

     <React.Fragment>
        {/* <Search /> */}
        <Map />
        <Result />
        <Result />
        <Result />
        <Result />
        <Result />
     </React.Fragment>
  )
}
}

export default Main;