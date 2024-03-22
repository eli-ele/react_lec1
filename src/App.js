import './App.css';
import Box from './components/box/box';
import Box3  from './components/box3/box3';
import Box4 from './components/box4/box4';
import Box5 from './components/box5/box5';
import Tags from './components/box5/tags';
import Footer from './components/footer/footer';
import Foottext from './components/footer/foottext';
import Header from './components/header/header';

function App() {
  return (
    <div className="App  ">
      <Header />
    
        <div className='conteiner'>
          <div className='box_1'>
            <Box
              width={850}
              height={580}
              img = "https://www.w3schools.com/w3images/woods.jpg"
              title="TITLE HEADING"
              description="Title description,"
              date="April 7, 2014"
              p="Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."
              btn="READ MOR >>"
              comment="comments ⬛ "
            />
          
            <Box
              width={850}
              height={580}
              img ="https://www.w3schools.com/w3images/bridge.jpg"
              title="BLOG ENTRY"
              description="Title description,"
              date="April 2, 2014"
              p="Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."
              btn="READ MOR >>"
              comment="comments ⚫ "
             />
        </div>
        
          <div className='box_2 '>
           <Box3
             src="https://www.w3schools.com/w3images/avatar_g.jpg " 
             name="My Name"
             paragraf="Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you."
           />

            <div className='post'>
            <Box4 />
            </div>

            <div className='tagss'>
            <Tags />
            <div className='buttondiv'>
            <Box5 bgr="lightgray" value="Travel" width={"60px"} height={"20px"}  /> 
            <Box5  bgr="lightgray" value="New York" width={"80px"} height={"20px"} /> 
            <Box5  bgr="lightgray" value="London" width={"60px"} height={"20px"} /> 
            <Box5  bgr="lightgray" value="IKEA" width={"50px"} height={"20px"} /> 
            <Box5  bgr="lightgray" value="NORWAY" width={"80px"} height={"20px"} /> 
            <Box5  bgr="lightgray" value=" DIY" width={"40px"} height={"20px"} /> 
            <Box5  bgr="lightgray" value="Ideas" width={"60px"} height={"20px"} /> 
            <Box5  bgr="lightgray" value="Baby " width={"50px"} height={"20px"} /> 
            <Box5  bgr="lightgray" value="Family" width={"50px"} height={"20px"} /> 
            <Box5  bgr="lightgray" value="News" width={"50px"} height={"20px"} /> 
            <Box5  bgr="lightgray" value="Clothing" width={"90px"} height={"20px"} /> 
            <Box5  bgr="lightgray" value="Shopping" width={"80px"} height={"20px"} /> 
            <Box5  bgr="lightgray" value="Sports" width={"60px"} height={"20px"} /> 
            <Box5  bgr="lightgray" value="Games" width={"60px"} height={"20px"} /> 
           </div>
          </div>          
          </div>
      </div>

      <div className='footer'>
        <div className='footerbtn'>
          <Footer bg="100px" value="previus" width={"130px"} height={"50px"}  />
          <Footer bg="100px" value="Next >>" width={"130px"} height={"50px"} />
        </div>
          <Foottext />
       </div>
      </div>
      
  );
}

export default App;
