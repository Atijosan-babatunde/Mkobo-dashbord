import React, { useState } from 'react';
import { BaseContainer } from '../layouts/Containers';
import { Link } from 'react-router-dom';

import { BsBell } from "react-icons/bs";
import ButtonHolder from './buttongroup';
import SwipeToSlide from './cardslide';
// import Modal from './modal';



export function LandingPage() {
    const [open, setOpen] = useState(false);
    const openNav = () => setOpen(!open);


    const [modal, setModal] = useState(false);
    const Toggle = () => setModal(!modal);




    return (
        <BaseContainer open={open}>
            <div className="top ">

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="header">
                                <div className="nav">
                                    <div className="user text-end">
                                        <div className="mobilenav">
                                            <img src="img/bars-solid.svg" onClick={() => openNav()} alt="" className="bar" />
                                            <div class="btn-group pt-2" role="group">

                                                <button id="btnGroupDrop1" type="button" class="btn dropdown-toggle" style={{ background: "#0047CC", borderRadius: "5px", color: "#ffffff", }} data-bs-toggle="dropdown" aria-expanded="false">
                                                    <BsBell /> Benndict Ulinfo
                                                </button>
                                                <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                                    <li><Link className="dropdown-item" to="#">Log In</Link></li>
                                                    <li><Link className="dropdown-item" to="#">Sign Up</Link></li>
                                                </ul>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                <div className='container'>
                    <h1 className='head1'>Hello Benedict,</h1>
                    <div className='row'>
                        <div className='col-xl-11 col-md-12'>
                            <div className="row ">
                                <SwipeToSlide />
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>


                <div className='container col-xl-11'>
                    <div className='row'>
                        <div className='col-md-8 '>
                            <div className=' border-end'>

                                <ButtonHolder buttons={["Spending Account", "Linked Account"]} />

                                <h2 className='quick mt-3'>Recent Transaction</h2>
                                <div style={{ display: "flex", justifyContent: "space-between" }} className="mb-4">
                                    <ButtonHolder buttons={["All", "Debit", "Credit"]} />


                                    <div class="btn-group" role="group">
                                        <button id="btnGroupDrop1" type="button" class="btn dropdown-toggle" style={{ border: "none" }} data-bs-toggle="dropdown" aria-expanded="false">
                                            post 30 days
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                            <li><Link class="dropdown-item" to="#">20 days</Link></li>
                                            <li><Link class="dropdown-item" to="#">10 days</Link></li>
                                        </ul>
                                    </div>

                                </div>

                                <div class="progress">
                                    <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>

                                <h1 className='logohead mt-4 mb-0'>Today</h1>
                                <div className='container mt-1 p-3 border-start'>

                                    <div className='border-bottom mt-2' style={{ display: "flex", justifyContent: "space-between", }}>


                                        <div style={{ display: "flex", justifyContent: "space-between", }}>
                                            <div style={{ paddingRight: "1em" }}>
                                                <img src="img/Group 6590.png" alt="" />
                                            </div>
                                            <div>
                                                <h2 className='logoh'>Paid For</h2>
                                                <p className='logop'>Netflix</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h2 className='logonum1'><span className=''>&#8358;</span>-3,000.00</h2>
                                            <p className='logonum2'><span className=''>&#8358;</span>300,000</p>
                                        </div>
                                    </div>

                                    <div className='border-bottom mt-2' style={{ display: "flex", justifyContent: "space-between", }}>


                                        <div style={{ display: "flex", justifyContent: "space-between", }}>
                                            <div style={{ paddingRight: "1em" }}>
                                                <img src="img/Group 6520.png" alt="" />
                                            </div>
                                            <div>
                                                <h2 className='logoh'>Received From</h2>
                                                <p className='logop'>Ayoola Adeniji</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h2 className='logonum1'><span className=''>&#8358;</span>+3,000.00</h2>
                                            <p className='logonum2'><span className=''>&#8358;</span>300,000</p>
                                        </div>
                                    </div>
                                    <div className='border-bottom mt-2' style={{ display: "flex", justifyContent: "space-between", }}>


                                        <div style={{ display: "flex", justifyContent: "space-between", }}>
                                            <div style={{ paddingRight: "1em" }}>
                                                <img src="img/Group 6590 (1).png" alt="" />
                                            </div>
                                            <div>
                                                <h2 className='logoh'>Sent Money with Mtag </h2>
                                                <p className='logop'>Car Repair</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h2 className='logonum1'><span className=''>&#8358;</span>-3,000.00</h2>
                                            <p className='logonum2'><span className=''>&#8358;</span>300,000</p>
                                        </div>
                                    </div>

                                </div>


                                <h1 className='logohead1 mt-4 mb-0'>Sept 18</h1>
                                <div className='container mt-1 p-3 mb-3 border-start'>

                                    <div className='border-bottom mt-2' style={{ display: "flex", justifyContent: "space-between", }}>


                                        <div style={{ display: "flex", justifyContent: "space-between", }}>
                                            <div style={{ paddingRight: "1em" }}>
                                                <img src="img/Group 6590.png" alt="" />
                                            </div>
                                            <div>
                                                <h2 className='logoh'>Paid For</h2>
                                                <p className='logop'>Netflix</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h2 className='logonum1'><span className=''>&#8358;</span>-3,000.00</h2>
                                            <p className='logonum2'><span className=''>&#8358;</span>300,000</p>
                                        </div>
                                    </div>

                                    <div className='border-bottom mt-2' style={{ display: "flex", justifyContent: "space-between", }}>


                                        <div style={{ display: "flex", justifyContent: "space-between", }}>
                                            <div style={{ paddingRight: "1em" }}>
                                                <img src="img/Group 6520.png" alt="" />
                                            </div>
                                            <div>
                                                <h2 className='logoh'>Payment Request to Adeniji Ayoola</h2>
                                                <p className='logop'>Status: <span style={{ color: "red" }}>Pending</span></p>
                                            </div>
                                        </div>
                                        <div>
                                            <h2 className='logonum1'><span className=''>&#8358;</span>-3,000.00</h2>
                                            <p className='logonum2'><span className=''>&#8358;</span>300,000</p>
                                        </div>
                                    </div>

                                    <div className='border-bottom mt-2' style={{ display: "flex", justifyContent: "space-between", }}>


                                        <div style={{ display: "flex", justifyContent: "space-between", }}>
                                            <div style={{ paddingRight: "1em" }}>
                                                <img src="img/Group 6590 (1).png" alt="" />
                                            </div>
                                            <div>
                                                <h2 className='logoh'>Transfer with Mtag</h2>
                                                <p className='logop'>Car Repair</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h2 className='logonum1'><span className=''>&#8358;</span>-3,000.00</h2>
                                            <p className='logonum2'><span className=''>&#8358;</span>300,000</p>
                                        </div>
                                    </div>

                                    <div className='border-bottom mt-2' style={{ display: "flex", justifyContent: "space-between", }}>


                                        <div style={{ display: "flex", justifyContent: "space-between", }}>
                                            <div style={{ paddingRight: "1em" }}>
                                                <img src="img/Group 6590.png" alt="" />
                                            </div>
                                            <div>
                                                <h2 className='logoh'>Paid For</h2>
                                                <p className='logop'>Netflix</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h2 className='logonum1'><span className=''>&#8358;</span>-3,000.00</h2>
                                            <p className='logonum2'><span className=''>&#8358;</span>300,000</p>
                                        </div>
                                    </div>

                                    <div className='border-bottom mt-2' style={{ display: "flex", justifyContent: "space-between", }}>


                                        <div style={{ display: "flex", justifyContent: "space-between", }}>
                                            <div style={{ paddingRight: "1em" }}>
                                                <img src="img/Group 6520.png" alt="" />
                                            </div>
                                            <div>
                                                <h2 className='logoh'>Received From</h2>
                                                <p className='logop'>Ayoola Adeniji</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h2 className='logonum1'><span className=''>&#8358;</span>+3,000.00</h2>
                                            <p className='logonum2'><span className=''>&#8358;</span>300,000</p>
                                        </div>
                                    </div>
                                    <div className='border-bottom mt-2' style={{ display: "flex", justifyContent: "space-between", }}>


                                        <div style={{ display: "flex", justifyContent: "space-between", }}>
                                            <div style={{ paddingRight: "1em" }}>
                                                <img src="img/Group 6590 (1).png" alt="" />
                                            </div>
                                            <div>
                                                <h2 className='logoh'>Sent Money with Mtag </h2>
                                                <p className='logop'>Car Repair</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h2 className='logonum1'><span className=''>&#8358;</span>-3,000.00</h2>
                                            <p className='logonum2'><span className=''>&#8358;</span>300,000</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='justify-content-center text-center mb-5'>
                                <button type="button" className="btn btn-last btn-lg  px-5" onClick={() => Toggle()}>View All Transactions</button>
                            </div>
                            {/* <Modal show={modal} title="All Transaction" close={Toggle}>
                                <div className='container mt-1 p-3 border-start'>

                                    <div className='border-bottom mt-2' style={{ display: "flex", justifyContent: "space-between", }}>


                                        <div style={{ display: "flex", justifyContent: "space-between", }}>
                                            <div style={{ paddingRight: "1em" }}>
                                                <img src="img/Group 6590.png" alt="" />
                                            </div>
                                            <div>
                                                <h2 className='logoh'>Paid For</h2>
                                                <p className='logop'>Netflix</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h2 className='logonum1'><span className=''>&#8358;</span>-3,000.00</h2>
                                            <p className='logonum2'><span className=''>&#8358;</span>300,000</p>
                                        </div>
                                    </div>

                                    <div className='border-bottom mt-2' style={{ display: "flex", justifyContent: "space-between", }}>


                                        <div style={{ display: "flex", justifyContent: "space-between", }}>
                                            <div style={{ paddingRight: "1em" }}>
                                                <img src="img/Group 6520.png" alt="" />
                                            </div>
                                            <div>
                                                <h2 className='logoh'>Received From</h2>
                                                <p className='logop'>Ayoola Adeniji</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h2 className='logonum1'><span className=''>&#8358;</span>+3,000.00</h2>
                                            <p className='logonum2'><span className=''>&#8358;</span>300,000</p>
                                        </div>
                                    </div>
                                    <div className='border-bottom mt-2' style={{ display: "flex", justifyContent: "space-between", }}>


                                        <div style={{ display: "flex", justifyContent: "space-between", }}>
                                            <div style={{ paddingRight: "1em" }}>
                                                <img src="img/Group 6590 (1).png" alt="" />
                                            </div>
                                            <div>
                                                <h2 className='logoh'>Sent Money with Mtag </h2>
                                                <p className='logop'>Car Repair</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h2 className='logonum1'><span className=''>&#8358;</span>-3,000.00</h2>
                                            <p className='logonum2'><span className=''>&#8358;</span>300,000</p>
                                        </div>
                                    </div>

                                </div>
                            </Modal> */}
                        </div>
                        <div className='col-md-4'>
                            <h2 className='quick mb-4'>Quick Actions</h2>


                            <div className='row'>
                                <div className='col-md-6 p-2'>

                                    <div className="">
                                        <div className="card-body a1 justify-content-center text-center " >
                                            <img src="img/Vector (1).png" alt="" />
                                            <h5 className="a1-title mt-2">Send Money</h5>


                                        </div>
                                    </div>

                                </div>

                                <div className='col-md-6 p-2'>

                                    <div className="">
                                        <div className="card-body a1 justify-content-center text-center " >
                                            <img src="img/Vector (2).png" alt="" />
                                            <h5 className="a1-title mt-2">Fund Account</h5>


                                        </div>
                                    </div>

                                </div>
                            </div>


                            <div className='row'>
                                <div className='col-md-6 p-2'>

                                    <div className="">
                                        <div className="card-body a1 justify-content-center text-center " >
                                            <img src="img/Vector (3).png" alt="" />
                                            <h5 className="a1-title mt-2">Buy Airtime</h5>


                                        </div>
                                    </div>

                                </div>

                                <div className='col-md-6 p-2'>

                                    <div className="">
                                        <div className="card-body a1 justify-content-center text-center " >
                                            <img src="img/Vector (4).png" alt="" />
                                            <h5 className="a1-title mt-2">Pay Bills</h5>


                                        </div>
                                    </div>

                                </div>
                            </div>


                            <div className='row mb-4'>
                                <div className='col-md-6 p-2'>

                                    <div className="">
                                        <div className="card-body a1 justify-content-center text-center " >
                                            <img src="img/Group.png" alt="" />
                                            <h5 className="a1-title mt-2">Save Money</h5>


                                        </div>
                                    </div>

                                </div>

                                <div className='col-md-6 p-2'>

                                    <div className="">
                                        <div className="card-body a1 justify-content-center text-center " >
                                            <img src="img/Group 6576.png" alt="" />
                                            <h5 className="a1-title mt-2">Cashback</h5>


                                        </div>
                                    </div>

                                </div>
                            </div>


                            <div className='justify-content-left text-left mb-4'>
                                <button type="button" className="btn btn-primary btn-lg"  >
                                    <h1 className='down1'>Upgrad Your Account</h1>
                                    <p className='down2'>Upgrade your account to increase your account limits.</p>

                                </button>
                            </div>


                        </div>


                    </div>
                </div>





            </div>
        </BaseContainer>
    )
}