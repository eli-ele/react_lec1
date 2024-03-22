import "./box5.css"



const Box5 = ({ bgr, value, width, height, p, hover }) => {
    
    return <button style={{ backgroundColor: bgr, width, height,hover }}>{value}{ p}</button>
  
  
}

export default Box5