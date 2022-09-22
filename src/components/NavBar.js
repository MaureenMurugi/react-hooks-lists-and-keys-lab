import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const listLinks = links.map((link, key) => {
   return (
    <a href ={`#${link}`} key={key}>{link}</a>

   
   )
  });

  return (
  <nav>
    {listLinks}
  </nav>
  )
}

export default NavBar;
