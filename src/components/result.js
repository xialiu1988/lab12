import React from 'react';



class Result extends React.Component{
constructor(props){
    super(props);
    this.state={
        darkSky:[]
    }
}
  render(){
    const allWeather = this.state.darkSky.map((item, i) => {
        return (    
             <div key={i}>
            <h4>{item.time}</h4>
            <p>{item.forecast}</p>
            </div>
        )
      })
      
      return(
          <div>
         {allWeather}
         </div>

      )
  }

}
export default Result;