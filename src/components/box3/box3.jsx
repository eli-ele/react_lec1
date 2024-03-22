import "./box3.css"

import React from 'react'

export const Box3 = ({src,name,paragraf}) => {
    return (
        <div className="card">
            <img src={src} alt="" />
            <h1>{name}</h1>
            <p>{paragraf}</p>
        </div>    
   )
  
}
export default Box3; 