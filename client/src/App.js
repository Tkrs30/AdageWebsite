import React, { useState, useEffect }   from 'react';
import logo from './logo.svg';
import logoAdage from './images/ADAGELOGO_transparent.png';
import logoAdage2 from './images/ADAGELOGO.png';
import imageDeco from './images/image_pres_adage_deco.jpg';
import imageGout from './images/IMG_0729.jpg';
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
    if (currentScrollPosition > 200) {
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
    display: 'flex',
    height: '100vh',
  };

  const leftPaneStyle = {
    backgroundColor: '#fff',
    padding: '10px',
    display: 'flex',
    justifyContent: 'center',
  };

  const rightPaneStyle = {
    backgroundColor: '#fff',
    padding: '10px',
    display: 'flex',
    justifyContent: 'center'
  };

  const dividerStyle = {
    position: 'relative',
    width: 1,
    height: 1237,
    backgroundColor: '#CCCCCC',
  };

  const imagePres = {
    height: '134%',
    width: '134%',
    objectFit: 'cover',
  };

  return (
    <div className="App">
      <header style={headerStyle}>
        <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
          <img src={logoAdage2}  alt="logoAdage" style={logoStyle}/>
          <nav style={navBarStyle}>
            <lu style={navItemStyle}
              onMouseEnter={() => handleItemEnter('item1')}
              onMouseLeave={handleItemLeave}
            >QUI NOUS SOMMES NOUS ?
            </lu>
            <lu style={navItemStyle2}
              onMouseEnter={() => handleItemEnter('item2')}
              onMouseLeave={handleItemLeave}
            >QUE PROPOSONS NOUS ?
            </lu>
          </nav>
        </div>
      </header>
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
      <div style={containerStyle}>
        <div style={leftPaneStyle}>
          <img style={imagePres} src={imageDeco} alt="description"/>
        </div>
      <div style={dividerStyle}></div>
        <div style={rightPaneStyle}>
          <img style={imagePres} src={imageGout} alt="description"/>
        </div>
      </div>
    </div>
  );
}

export default App;
