import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Links from "./Links";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city} />
      <About github={user.links.github} linkden={user.links.linkedin}/>
      <Links bio={user.bio}/>
    </div>
  );
}
"color= 'firebrick' name = 'Sakinah' city = 'Virginia'"
export default App;
