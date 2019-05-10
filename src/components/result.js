import React from 'react';



class Result extends React.Component{
constructor(props){
    super(props);
    this.state={
        darkSky:[],
        yelps:[],
        events:[],
        movies:[]
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
        return (    
             <div key={i}>
        <img src={item.image_url}  />
       <h4>{item.name}</h4> 
        <p>Rating: {item.rating}</p>
        <p>Price: {item.price}</p>
      </div>
        )
      })


  const eventsData=this.props.events.map((item,i)=>{

    return (
        <div key={i}>
        <a href={item.link}>{item.name}</a>
         <p>{item.event_date}</p>
         <p>Summary: {item.summary}</p> 
        </div>

    )

  })

  const movieData=this.props.movies.map((item,i)=>{
    console.log(this.props.movies);
    return (
        <div key={i}>
           <h4> {item.title}</h4>
         <p>Overview: {item.overview}</p>
         <p>{item.average_votes}</p>
         <p>{item.total_votes}</p>
         <img src={item.image_url} />        
         <p>{item.release_date}</p> 
         <p>{item.popularity}</p> 
         <p>{item.released_on}</p> 
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
         <hr />
              <h2>Get movies from MovieDb API</h2>
         {movieData}
         </div>

      )
  }

}
export default Result;