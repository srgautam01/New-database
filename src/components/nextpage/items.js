import React, { Component } from "react";
import "./items.css";
import { Link } from "react-router-dom";

class HomeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

            hotelsType: [
                {
                    type: 'hotels'
                },
                {
                    type: 'resturants'
                },
                {
                    type: 'condo for rent'
                },
                {
                    type: 'motels'
                },
                {
                    type: 'vacation'
                },
                {
                    type: 'rental home'
                },
                {
                    type: 'shopping malls'
                }

            ],

            transportTypes: [
                {
                    type: 'airport'
                },
                {
                    type: 'train'
                },
                {
                    type: 'boat'
                },
                {
                    type: 'flights'
                },
                {
                    type: 'public-bus'
                },
                {
                    type:'taxi-for-rent'
                },
                {
                    type: 'rexxa-cart'
                },
                {
                    type: 'uber'
                }

            ],
            recreationTypes: [
                {
                    type: 'camping'
                },
                {
                    type: 'fishing'
                },
                {
                    type: 'biking'
                },
                {
                    type: 'horse-riding'
                },
                {
                    type: 'kayaking'
                },
                {
                    type: 'zip-flying'
                },
                {
                    type: 'paraglyding'
                },

                {
                    type: 'hiking'
                },

                {
                    type: 'rock-climbing'
                },
                {
                    type: 'movies'
                },
                {
                    type: 'historically-influenced-places'
                },
                {
                    type: 'travel forum'
                },
            ]
        }
    }




    componentDidMount() {
        debugger;
        fetch('http://localhost:4002/ticketType', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // }).then(res => res.json())
        //   .then(res => {
        //     debugger;
        //   })
        // };
    }

    render() {
        const mapper = (transportType) => {
            return <div>
                {transportType['type']}
            </div>
        };

        return (
            <div className="home">

                <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-ride="carousel"
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                className="d-block w-100 image1size"
                                src="https://d36tnp772eyphs.cloudfront.net/blogs/1/2019/04/Sunset-at-Blue-Lake-Breckenridge-Colorado.jpg"
                                alt="First slide"
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                className="d-block w-100 image2size"
                                src="https://images.pexels.com/photos/2098904/pexels-photo-2098904.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                alt="Second slide"
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                className="d-block w-100 image3size"
                                src="https://images.pexels.com/photos/161153/sheikh-zayed-grand-mosque-white-mosque-abu-dhabi-161153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                alt="Third slide"
                            />
                        </div>
                    </div>
                    <a
                        className="carousel-control-prev"
                        href="#carouselExampleControls"
                        role="button"
                        data-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a
                        className="carousel-control-next"
                        href="#carouselExampleControls"
                        role="button"
                        data-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>

                <div className="container onetype">
                    <div className="row">
                        <div className="col-sm">
                            <strong>Find a place to stay!</strong> <br />
                            <Link to={"/category/vacation"}>
                                <button type="button" className="btn btn-primary btn-lg">
                                    Hotels

                                </button>
                            </Link>
                        </div>
                        <div className="col-sm">
                            <strong>Let's go shopping!</strong>
                            <br />
                            <Link to={"/category/grocery"}>
                                <button type="button" className="btn btn-primary btn-lg">
                                    Shopping
                                </button>
                            </Link>
                        </div>
                        <div className="col-sm">
                            <strong>Grab something to eat!</strong>
                            <br />
                            <Link to={"/category/food"}>
                                <button type="button" className="btn btn-primary btn-lg">
                                    Food
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                {
                    this.state.transportTypes.map(mapper)
                }
            </div>
        );
    }
}

export default HomeComponent;
