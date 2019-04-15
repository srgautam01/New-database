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
                            <img className="d-block w-100 image1size" src="https://images.oyster.com/photos/main-pool--v14743931-w902.jpg" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 image2size" src="https://media-cdn.tripadvisor.com/media/photo-s/0d/90/08/cc/la-paella.jpg" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 image3size" src="https://www.rd.com/wp-content/uploads/2019/01/pasadena-ca-usa-november-15-2014-whole-food-market-exterior-whole-foods-is-an-american-foods-supermarket-chain-specializing-in-natural-and-organic-foods-760x506.jpg" alt="Third slide" />
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
                            I can find vacation places for you <br />
                            <Link to={'/category/vacation'}>
                                <button type="button" className="btn btn-primary btn-lg">vacation button</button>
                            </Link>
                        </div>
                        <div className="col-sm">
                            I can search marts and grocery stores for you.<br />
                            <Link to={'/category/grocery'}>
                                <button type="button" className="btn btn-primary btn-lg">grocery button</button>
                            </Link>
                        </div>
                        <div className="col-sm">
                            I can find food places for you<br />
                            <Link to={'/category/food'}>
                                <button type="button" className="btn btn-primary btn-lg">food button</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>






        )
    }
}

export default HomeComponent;