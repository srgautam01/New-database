import React, {Component} from 'react';
import './home.css';
import {Link} from 'react-router-dom';

class HomeComponent extends Component{
    render() {
        return (
            <div className="home">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100 image1size" src="https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 image2size" src="https://i.pinimg.com/originals/6f/28/a3/6f28a39660077bf2053481a7e5aed6c4.jpg" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 image3size" src="http://www.technocrazed.com/wp-content/uploads/2015/12/Tree-wallpaper-to-use-as-background-135.jpg" alt="Third slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button"
                       data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button"
                       data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

                <div className="container onetype">
                    <div className="row">
                        <div className="col-sm">
                            I can find places for you
                            <Link to={'/tools'}>
                                take me to tools
                            </Link>
                        </div>
                        <div className="col-sm">
                            I am home page
                        </div>
                        <div className="col-sm">
                            I can find food places for you
                        </div>
                    </div>
                </div>
            </div>





       
        )
    }
}

export default HomeComponent;