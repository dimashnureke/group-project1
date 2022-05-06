import './App.css';
import pic from './img/header-photo1.svg'
import pic1 from './img/header-photo1-after.svg'
import astropic from './img/astro-overlay.svg'
import astropicafter from './img/astro-bottom.svg'

function Header() {
  return (
    <div className="Header">
      <header>
          <div className="header-container">
            <img src={pic} alt="photo" height="20px"></img>
            <img src={astropic} alt="photo" height="20px"></img>
            <div className="header-item">logitech</div>
            <div className="header-item">astro</div>
            <div className="header-item">blue</div>
            <div className="header-item">jaybird</div>
          </div>
          <div className="header-container">
            <div className="header-item">ru</div>
            <div className="header-item-1">МОЯ УЧЕТНАЯ ЗАПИСЬ</div>
          </div>
      </header>
    </div>
  );
}

export default Header;