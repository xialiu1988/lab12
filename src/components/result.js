import React from 'react';



class Result extends React.Component{
constructor(props){
    super(props);
    this.state={
        darkSky:[],
        yelps:[],
        events:[]
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


  const eventsData=this.props.events.map((item,i)=>{

    return (
        <div key={i}>
        <link href={item.link} value="More Info" />
         <h4> {item.name}</h4>
         <p>{item.event_date}</p>
         <p>Summary: {item.summary}</p> 
        </div>

    )

  })




      return(
          <div>
              <h2>Get weather from DarkSky API</h2>
         {weathers}
         <hr />
              <h2>Get yelp data from Yelp API</h2>
         {yelpData}
         <hr />
              <h2>Get events data from EventBright API</h2>
         {eventsData}
         </div>

      )
  }

}
export default Result;