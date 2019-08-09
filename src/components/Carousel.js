import React from "react";

import iconLaser from "../img/icon_laser.png"
import iconMachining from "../img/icon_machining.png"
import iconGrinding from "../img/icon_grinding.png"

export default function Carousel() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="img-fluid" src={iconLaser} alt="First slide" />
                    <div className="container carousel-caption d-md-block">
                        <a href=""><h5>Laser Processing</h5></a>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum lacinia lorem.<br /> Mauris varius scelerisque metus vel ultrices. Aliquam convallis.</p>
                        <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="img-fluid" src={iconMachining} alt="Second slide" />
                    <div className="container carousel-caption d-md-block">
                        <a href=""><h5>Machining</h5></a>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Vivamus sed venenatis ex. Vestibulum ante ipsum.</p>
                        <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="img-fluid" src={iconGrinding} alt="Third slide" />
                    <div className="container carousel-caption d-md-block">
                        <a href=""><h5>Grinding</h5></a>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Phasellus ultricies iaculis arcu. Nunc posuere elit sed metus luctus, et posuere mauris hendrerit. Cras mollis magna.</p>
                        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}