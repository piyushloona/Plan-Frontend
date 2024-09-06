import React, { useState, useEffect } from "react";
import profile from '../Assets/images/profile.svg'
import hand from '../Assets/images/hand.png'
import Polygon from '../Assets/images/Polygon 1.png'
import menuicon from '../Assets/images/menu.png'
const Header = () => {

  const [isClassAdded, setIsClassAdded] = useState(false);

  // Use useEffect to update the body class when isClassAdded changes
  useEffect(() => {
    if (isClassAdded) {
      document.body.classList.add("new-class");
    } else {
      document.body.classList.remove("new-class");
    }
    // Clean up the effect when the component unmounts
    return () => {
      document.body.classList.remove("new-class");
    };
  }, [isClassAdded]);

  // Toggle class when the button is clicked
  const handleClick = () => {
    setIsClassAdded(!isClassAdded);
  };

  return (
   <div className='header'>
    <button className='toggle-icon' onClick={handleClick}>
    
    {/* <img src={menuicon}/> */}
    </button>
  <div className='menus-div'>
    <img src={profile} alt='' className='profile-img'/>
    <h3>Hello, John</h3>
    <img src={hand} alt='' className='hand-img'/>
    <img src={Polygon} alt='' className='arrow-img'/>
    </div>

    
   </div>



  )
}

export default Header