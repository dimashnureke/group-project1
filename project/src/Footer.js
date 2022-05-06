import './App.css';

function Footer() {
  return (
    <div className="Footer">
        <div className="footer-container">
            <div className="footer-container1">
                <p>О НАС</p>
                <p>КОНФИДЕНЦИАЛЬНОСТЬ И <br></br> БЕЗОПАСНОСТЬ</p>
                <p>УСЛОВИЯ ИСПОЛЬЗОВАНИЯ</p>
                <p>Партнерская программа</p>
            </div>

            <div className="footer-container1">
                <p>КОНТАКТЫ</p>
                <p>НАСТРОЙКИ ФАЙЛОВ COOKIE</p>
                <p>ЗАБОТА ОБ ОКРУЖАЮЩЕЙ СРЕДЕ</p>
                <p>ПАРАМЕТРЫ ЭЛЕКТРОННОЙ ПОЧТЫ</p>
            </div>


                <div className="footer-container1">
                    <p>КАРЬЕРА</p>
                    <p>КАРТА САЙТА</p>
                    <p>Утилизация отходов</p>
                </div>

                <div className="footer-container1">
                    <p>ПАРТНЕРСКАЯ ЛАБОРАТОРИЯ <br></br> РАЗРАБОТЧИКА</p>
                    <p>ИНВЕСТОРЫ</p>
                    <p>ПРЕСС-ЦЕНТР</p>
                </div>
        </div>
        <div className="footer-bottom-info">© 2022 Logitech. Все права защищены</div>
    </div>
  );
}

export default Footer;