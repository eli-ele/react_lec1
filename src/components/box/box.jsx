import "./box.css";

const Box = ({posts,width,img,height,title,description,date,p,btn,comment,loren,text}) => {
    return (
        <div className="w3-row" style={{ width, height, }} >
            <h3>{posts}</h3>
            <div className="imgpost">
              <img src={img} alt="" />
                <h5>{loren}</h5>
                <p>{text }</p>
            </div>
            <h1>{title}</h1>
            <h4>{description} {date}</h4>
            <p className="style={text-align, left;}">{p}</p>
            <div className="btncomm">
            <button >{btn}</button>
            <p>{comment}</p>
            </div>
        </div>
    )
}
export default Box;