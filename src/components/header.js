import React from 'react';


class Header extends React.Component{
constructor(props){
    super(props);
}


render(){
    return (
        <div>
        <h1>City Explorer</h1>
        <p>Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more!</p>
        </div>
    );
}

}

export default Header;