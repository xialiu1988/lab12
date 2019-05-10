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
             <li key={i}>
            {item.time}: {item.forecast}
            </li>
        )
      })
      

      const yelpData = this.props.yelps.map((item, i) => {
        return (    
             <li key={i}>
       <h4>{item.name}</h4> 
        <p>The average rating is {item.rating } out of 5 and the average cost is {item.price} out of 4</p>
        <img src={item.image_url}  />
      </li>
        )
      })


  const eventsData=this.props.events.map((item,i)=>{

    return (
        <li key={i}>
        <a href={item.link}>{item.name}</a>
         <p>Event Date : {item.event_date}</p>
         <p>Summary: {item.summary}</p> 
        </li>
    )

  })

  const movieData=this.props.movies.map((item,i)=>{
    console.log(this.props.movies);
    return (
        <li key={i}>
         <p>{item.release_date}</p> 
         <p><span>{item.title}</span> was relased on {item.released_on}. Out of {item.total_votes} total votes, {item.title} has an average vote of {item.average_votes} and a popularity score of {item.popularity}.</p>
         <img src={item.image_url} />  
         <p>Overview: {item.overview}</p>      
        </li>

    )

  })



      return(
          <div>
              <h2>Get weather from DarkSky API</h2>
              <ul>
           {weathers}
             </ul>
         <hr />
              <h2>Get yelp data from Yelp API</h2>
              <ul>
         {yelpData}
         </ul>
         <hr />
              <h2>Get events data from EventBright API</h2>
              <ul>
         {eventsData}
         </ul>
         <hr />
              <h2>Get movies from MovieDb API</h2>
         {movieData}
         </div>

      )
  }

}
export default Result;