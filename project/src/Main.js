import './App.css';
import mainphoto1 from './img/main-photo.webp'
import video from './img/g435-gaming-headset-video.mp4'


function Main() {
  return (
    <div className="Main">
      
      <video src="https://resource.logitechg.com/w_1920,c_limit,f_auto,dpr_1.0,q_auto:best/content/dam/gaming/en/products/g435/g435-gaming-headset-hero-video.mp4" autoplay="true" loop="true" width="100%"></video>
      
      <div className="main-video-info-container">
          <h2>ИГРА, КОТОРАЯ НЕ ЗАКАНЧИВАЕТСЯ НИКОГДА</h2>
          <p>Играйте в игры. Слушайте музыку. Общайтесь с друзьями.</p>
          <div className="main-video-button">ПРЕДСТАВЛЯЕМ G435</div>
        </div>

      <div className="main-container">
        <h2>ПРОДВИНУТОЕ ИГРОВОЕ СНАРЯЖЕНИЕ</h2>
        <p>Играйте в полную силу благодаря высокоэффективному игровому снаряжению Logitech G.</p>
        <div className="main-container2">
          <div className="main-container2-item">
            <img src="https://resource.logitechg.com/w_677,ar_1:1,c_limit,b_rgb:2f3132,q_auto,f_auto,dpr_auto/d_transparent.gif/content/dam/gaming/en/homepage/product-swatch-carousel/home-product-swatch-2.png?v=1" alt="photo" width="285px"></img>
            <h2>ИГРОВЫЕ МЫШИ</h2>
          </div>
          <div className="main-container2-item">
            <img src="https://resource.logitechg.com/w_677,ar_1:1,c_limit,b_rgb:2f3132,q_auto,f_auto,dpr_auto/d_transparent.gif/content/dam/gaming/en/homepage/product-swatch-carousel/home-product-swatch-10.png?v=1" alt="photo" width="285px"></img>
            <h2>Коврики для игровых мышей</h2>          
          </div>
          <div className="main-container2-item">
            <img src="https://resource.logitechg.com/w_677,ar_1:1,c_limit,b_rgb:2f3132,q_auto,f_auto,dpr_auto/d_transparent.gif/content/dam/gaming/en/homepage/product-swatch-carousel/home-product-swatch-1.png?v=1" alt="photo" width="285px"></img>
            <h2>ИГРОВЫЕ КЛАВИАТУРЫ</h2> 
          </div>
          <div className="main-container2-item">
            <img src="https://resource.logitechg.com/w_677,ar_1:1,c_limit,b_rgb:2f3132,q_auto,f_auto,dpr_auto/d_transparent.gif/content/dam/gaming/en/homepage/product-swatch-carousel/home-product-swatch-3.png?v=1" alt="photo" width="285px"></img>
            <h2>Аудиоустройства для игр</h2> 
          </div>
      </div>

      </div>
      <div className="main-container3">
        <div className="main-container3-info-container">
          <h2>НИКАКИХ ПРОВОДОВ.<br></br> НИКАКИХ ОГРАНИЧЕНИЙ.</h2>
          <p>ЧРЕЗВЫЧАЙНО ПОПУЛЯРНОЕ ВО ВСЕМ МИРЕ БЕСПРОВОДНОЕ ИГРОВОЕ ОБОРУДОВАНИЕ С <br></br> ПОДДЕРЖКОЙ ТЕХНОЛОГИИ LIGHTSPEED<sup>®</sup></p>
          <div className="main-container3-info-button">
            <a className="main3-button-info">Приобрести оборудование с <br></br> поддержкой технологии <br></br> LIGHTSPEED</a>
          </div>
        </div>
        <img src={mainphoto1} alt="photo" width="100%"></img>
      </div>

      <div className="main-container4">
        <div className="main4-item1">
          <img src="https://resource.logitechg.com/w_385,c_limit,q_auto,f_auto,dpr_auto/d_transparent.gif/content/dam/gaming/en/homepage/pro-series-logo.png?v=1" alt="photo" width="192px"></img>
        </div>
        <div className="main4-item2"></div>
        <div className="main4-item">
          <h2>ИГРАЙ И <br></br> ПОБЕЖДАЙ!</h2>
          <div className="main4-space"></div>
          <p>Разработана совместно с ведущими <br></br> международными киберспортсменами и для <br></br> них</p>
          <div className="main4-button">Приобрести устройство Pro</div>
        </div>
      </div>
      
        
      
    </div>
  );
}

export default Main;

