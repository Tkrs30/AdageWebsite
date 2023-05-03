import React, { useState, useEffect }   from 'react';
import logo from './logo.svg';
import logoAdage2 from './images/ADAGELOGO.png';
import imageDeco from './images/image_pres_adage_deco.jpg';
import imageGout from './images/IMG_0729.jpg';
import imageLogoGout from './images/logo_gouttiere.png'
import image1 from './image_expo/image1.jpg'
import image2 from './image_expo/image2.jpg'
import image3 from './image_expo/image3.jpg'
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './component/headband.js';
import './style/home.css';

function App() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isHeaderOpaque, setIsHeaderOpaque] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const currentScrollPosition = window.pageYOffset;
    const windowHeight = window.innerHeight
    if (currentScrollPosition > windowHeight) {
      setIsHeaderOpaque(true);
    } else {
      setIsHeaderOpaque(false);
    }
  };

  const handleItemEnter = (itemName) => {
    setHoveredItem(itemName);
  };

  const handleItemLeave = () => {
    setHoveredItem(null);
  };

  const headerStyle = {
    zIndex: '1',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: isHeaderOpaque ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
    boxShadow: isHeaderOpaque ? '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)' : 'none',
    transition: 'background-color 0.3s, box-shadow 0.3s'
  };

  const navBarStyle = {
    position: 'absolute',
    right: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  };

  const navItemStyle = {
    fontFamily: 'Helvetica',
    fontSize: '15px',
    margin: '0 10px',
    padding: '5px 10px',
    fontWeight: 'bold',
    cursor: 'pointer',
    background: `${hoveredItem === 'item1' ? 'black' : 'transparent'}`,
    boxShadow: `${hoveredItem === 'item1' ? '0px 4px 4px rgba(0, 0, 0, 0.25)' : 'none'}`,
    color: `${hoveredItem === 'item1' ? 'white' : 'black'}`,
    transition: 'background 0.3s, box-shadow 0.3s, color 0.3s'
  };

  const navItemStyle2 = {
    fontFamily: 'Helvetica',
    fontSize: '15px',
    margin: '0 10px',
    padding: '5px 10px',
    fontWeight: 'bold',
    cursor: 'pointer',
    background: `${hoveredItem === 'item2' ? 'black' : 'transparent'}`,
    boxShadow: `${hoveredItem === 'item2' ? '0px 4px 4px rgba(0, 0, 0, 0.25)' : 'none'}`,
    color: `${hoveredItem === 'item2' ? 'white' : 'black'}`,
    transition: 'background 0.3s, box-shadow 0.3s, color 0.3s'
  };

  // 300 x 108
  const logoStyle ={
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    borderRadius: '15px',
    margin: '0 20px',
    height: 77,
    weight: 15
  }

  const containerStyle = {
    zIndex: '0',
    display: "flex",
    justifyContent: "space-between",
    backgroundImage: `url(${imageDeco}), url(${imageGout})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left center, right center',
    backgroundSize: '50% 100%',
    padding: '0 2%',
    height: '110vh',
    maxwidth: '100vw',
  };

  const containerStyleH = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '3vh',
  };

  const dividerStyleH = {
    position: 'relative',
    width: 1237,
    height: 5,
    backgroundColor: '#CCCCCC',
  };

  const bottomLeftImage = {
    cursor: 'pointer',
    width: 100,
    height: 50,
    position: 'absolute',
    bottom: '25%',
    left: '60%',
  };

  const bottomRightImage = {
    cursor: 'pointer',
    width: 100,
    height: 50,
    position: 'absolute',
    bottom: '25%',
    right: '86%',
  };

  const rectangle = {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '10px',
    width: "80%",
    margin: "0 auto",
    height: "100vh",
    backgroundColor: "#e1e1e1",
  };

  const whiteband = {
    position: 'absolute',
    zIndex: '0',
    left: '50%',
    borderRadius: '10px',
    width: "49.3%",
    height: "40%",
    backgroundColor: isHeaderOpaque ? 'transparent' : '#FFF',
  };

  const visioneuse = {
    width: "65%",
    margin: "0 auto",
    height: "80vh",
    backgroundColor: "#e1e1e1",
  };

  const barre = {
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "118vh",
    width: "10px",
    background: "gray",
  };

  const pointsup = {
    height: "8px",
    width: "80%",
    background: "gray",
    position: "absolute",
    top: -5,
    left: 1,
    transform: "rotate(45deg)"
  };

  const pointinf = {
    height: "8px",
    width: "80%",
    background: "gray",
    position: "absolute",
    bottom: -5,
    right: 1,
    transform: "rotate(-45deg)",
  };

  const images = [
    {
      original: image1,
      thumbnail: image1,
      description: 'Image 1'
    },
    {
      original: image2,
      thumbnail: image2,
      description: 'Image 2'
    },
    {
      original: image3,
      thumbnail: image3,
      description: 'Image 3'
    }
  ];

  return (
    <div className="App">
      <header style={headerStyle}>
        <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
          <img src={logoAdage2}  alt="logoAdage" style={logoStyle}/>
          <div style={whiteband}></div>
          <nav style={navBarStyle}>
            <lu style={navItemStyle}
              onMouseEnter={() => handleItemEnter('item1')}
              onMouseLeave={handleItemLeave}
              >QUI SOMMES-NOUS ?
            </lu>
            <lu style={navItemStyle2}
              onMouseEnter={() => handleItemEnter('item2')}
              onMouseLeave={handleItemLeave}
              >QUE PROPOSONS-NOUS ?
            </lu>
          </nav>
        </div>
      </header>
      <div style={containerStyle}>
        <div style={barre}>
          <div style={pointsup}></div>
          <div style={pointinf}></div>
        </div>
        <div style={bottomLeftImage}>
          <img src={imageLogoGout} alt="" />
        </div>
        <div style={bottomRightImage}>
          <img src={imageLogoGout} alt="" />
        </div>
      </div>
      <div style={containerStyleH}>
        <div style={dividerStyleH}></div>
      </div>
      <div style={rectangle}>
        <div style={visioneuse}>
          <ImageGallery items={images} showPlayButton={false} showFullscreenButton={false} showBullets={true} />
        </div>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
