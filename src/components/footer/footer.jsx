import "./footer.css"

const Footer = ({ bg, value, width, height }) => {
   
    
    return <div className="footerbtncolor"><button style={{ backgroundColor: bg, width, height}}>{value}</button></div>
       
    
}
export default Footer;