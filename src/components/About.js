import React from "react";
import user from "./user";

// function bioPresent (props){
//   if(!props.bio){
//   return null;
// }else{
//   return (
//   <p>{props.bio}</p>
//   )
// }
// }
  
function About(props) {

  function showBio(props){
    if(!props.bio && props.bio != ""){
      return null; 
  }else return <p>props.bio</p>}
  
  const showBioFunction =  showBio

////JSX BELOW ONLY 
  return (

    <div id="about">
      <h2>About Me</h2>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <p>{showBioFunction}</p>
      
    </div>
  );
}

//If a prop of bio is passed to this component, it is displayed inside of a <p> tag
// If a prop of bio is not passed down, or if bio is an empty string, don't display the <p> tag
// Hint: you'll need to do some conditional rendering (Links to an external site.) here to determine whether or not to display the <p> tag

export default About;
