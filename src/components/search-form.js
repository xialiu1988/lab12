import React from 'react';
import superagent from 'superagent';


class SearchForm extends  React.Component{

constructor(props){
    super(props);
    this.state={
        keyword: 'nothing yet',
       location:{}
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