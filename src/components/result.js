import React from 'react';



class Result extends React.Component{
constructor(props){
    super(props);
    this.state={
        darkSky:[],
        yelps:[]
    }
}
  render(){
   
    const weathers = this.props.darkSky.map((item, i) => {
        return (    
             <div key={i}>
            <h4>{item.time}</h4>
            <p>{item.forecast}</p>
            </div>
        )
      })
      

      const yelpData = this.props.yelps.map((item, i) => {
        console.log(this.props.yelps);
        return (    
             <div key={i}>
        <h4>{item.name}</h4>
        <img src={item.image_url}  />
        <link rel="stylesheet" href={item.url} value="More Info" />
        <p>Rating: {item.rating}</p>
        <p>Price: {item.price}</p>
      </div>
        )
      })
      return(
          <div>
         {weathers}
         {yelpData}
         </div>

      )
  }

}
export default Result;