import React, { Component } from "react";

import Slider from "react-slick";
import { FaRegEyeSlash } from "react-icons/fa";

export default class SwipeToSlide extends Component {
    render() {
        const settings = {
            className: "center",
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            swipeToSlide: true,

            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
            // afterChange: function (index) {
            //     console.log(
            //         `Slider Changed to: ${index + 1}, background: #222; color:#000000`
            //     );
            // }
            
        };
        return (
            <div>
                
                <Slider {...settings}>
                    
                        <div className="p-3">
                            
                                <div className="card-body c1">
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <h2 className='c1-head'>Avalaible Balance</h2>
                                        <button type="button" className="btn btn1 px-4">Tier 1</button>
                                    </div>
                                    <h5 className="c1-title"><span className='small'>&#8358;</span>6,390.68<FaRegEyeSlash /></h5>


                                </div>
                           
                        </div>
                        <div className="p-3">
                            
                                <div className="card-body c2">
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <h2 className="c2-head">Car Purchase Plan</h2>
                                        <p className='c2-p'>75% Achieved</p>
                                    </div>
                                    <h5 class="c2-title"><span className='small-c2'>&#8358;</span>6,390.68<FaRegEyeSlash /></h5>
                                    {/* <hr/> */}
                                    <p className='c2-p2 mt-0 mb-0'>Interest as at today:  : ₦20,000</p>

                                </div>
                            
                        </div>
                        <div className="p-3">
                            
                                <div className="card-body c3">
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <h2 className="c2-head">Car Purchase Plan</h2>
                                        <p className='c2-p'>75% Achieved</p>
                                    </div>
                                    <h5 className="c2-title"><span className='small-c2'>&#8358;</span>6,390.68<FaRegEyeSlash /></h5>
                                    {/* <hr/> */}
                                    <p className='c2-p2 mt-0 mb-0'>Interest as at today:  : ₦20,000</p>

                                </div>
                            
                        </div>
                        <div className="p-3">
                            
                                <div className="card-body c2">
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <h2 className="c2-head">Car Purchase Plan</h2>
                                        <p className='c2-p'>75% Achieved</p>
                                    </div>
                                    <h5 class="c2-title"><span className='small-c2'>&#8358;</span>6,390.68<FaRegEyeSlash /></h5>
                                    {/* <hr/> */}
                                    <p className='c2-p2 mt-0 mb-0'>Interest as at today:  : ₦20,000</p>

                                </div>
                            
                        </div>
                  
                </Slider>
            </div>
        );
    }
}
