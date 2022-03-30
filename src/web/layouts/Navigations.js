import { Link } from 'react-router-dom';
import { BsHouseDoor} from 'react-icons/bs';
import {BsCreditCard2Back} from "react-icons/bs";
import {CgProfile} from "react-icons/cg";
import {FiSettings} from "react-icons/fi";
import {BiMoney} from "react-icons/bi";
import {BsPiggyBank} from "react-icons/bs";
import {RiHandCoinLine} from "react-icons/ri";
import {AiOutlineQuestionCircle} from "react-icons/ai";
import {AiOutlineMessage} from "react-icons/ai";






export const Header = ({open, setOpen}) => {

	return (
	<>
	 <div className={open ? "side-menu.active" : "side-menu"} id="side-menu">
			<div className="brand-name">
				<div className="logo">
					<Link to="/" className="brand-logo ">
						<img src="img/logo.png" alt="" className="logo" />
					</Link>
				</div>
				

				<ul>
					<li className="menu-item">
						<Link to="/" className="menu-link active">
							<span className="icon"><BsHouseDoor/></span>
							<span className="menu-text">Dashboard</span>
						</Link>
					</li>
					
					
					
					<li>
						<Link to="/mkolo" className="menu-link">
							<span className="icon"><BsPiggyBank/></span>
							<span className="menu-text">Mkolo</span>
						</Link>
					</li>
					<li>
						<Link to="/earlypay" className="menu-link">
							<span className="icon"><RiHandCoinLine/></span>
							<span className="menu-text">EarlyPay</span>
						</Link>
					</li>
                    <li>
						<Link to="/paybills" className="menu-link">
							<span className="icon"><BiMoney/></span>
							<span className="menu-text">Pay Bills</span>
						</Link>
					</li>
					<li>
						<Link to="/debitcard" className="menu-link">
							<span className="icon"><BsCreditCard2Back/></span>
							<span className="menu-text">Debit Cards</span>
						</Link>
					</li>
					<li>
						<Link to="/profile" className="menu-link">
							<span className="icon"><CgProfile/></span>
							<span className="menu-text">Profile</span>
						</Link>
					</li>
					<li>
						<Link to="/settings" className="menu-link">
							<span className="icon"><FiSettings/></span>
							<span className="menu-text">Settings</span>
						</Link>
					</li>
				
					{/* <li>
						<a href="#!" className="menu-link-out">
							<span className="icon-out"><i className="fa fa-sign-out"></i></span>
							<span className="menu-text">Logout</span>
						</a>
					</li> */}

					<h2 className='navh mt-2'>Help &amp; Support</h2>

				
					<div>
						<Link to="/" className="menu-link1">
							<span className="icon"><AiOutlineQuestionCircle/></span>
							<span className="menu-text">FAQ's</span>
						</Link>
					</div>

					<div>
						<Link to="/" className="menu-link1">
							<span className="icon"><AiOutlineMessage/></span>
							<span className="menu-text">Talk to someone</span>
						</Link>
					</div>
				</ul>
			</div>
		</div>
		</>
    )
}