import React from 'react';


class Search extends React.Component{
constructor(props){
    super(props);
}

render(){
return (
<div>
    <input />
    <button>Search</button>
</div>
)
}

}


class Map extends React.Component{
constructor(props){
    super(props);
}

render(){
return (
    <img src="http://placehold.it/300x200" />
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
        <Search />
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