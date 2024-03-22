import "./box4.css";

import React from 'react'

const Box4 = () => {
  return (
    <div className='post'>

    <p >Popular Posts</p>
    <div className='photo'> 
      <img src={require("../../assets/workshop.jpg")} alt="" /> <div className="Lorem"> <h4>Lorem </h4> <p>Sed mattis nunc</p></div> 
    </div>
    <div className='photo'>
      <img src={require("../../assets/gondol.jpg")}  alt="" /> <div className="Lorem"> <h4>Ipsum </h4> <p>Praes tinci sed</p></div>
    </div>
    <div className='photo'>
      <img src={require("../../assets/skies.jpg")}  alt="" /> <div className="Lorem"> <h4>Dorum </h4> <p>Ultricies congue</p></div>
    </div>
    <div className='photo'>
      <img src={require("../../assets/rock.jpg")} alt=""  /> <div className="Lorem"> <h4>Mingsum </h4> <p>Lorem ipsum dipsum</p></div>
    </div>

    </div>
  )
}
export default Box4;