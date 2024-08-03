// import 'bootstrap/dist/css/bootstrap.min.css';
import './NavStyle.css';
import { format } from 'date-fns';
import {Link, NavLink} from 'react-router-dom'

const Header = () => {

    const currentDate = new Date();
    const formattedDate = format(currentDate, "EEE, dd MMM yyyy h:mm a");

    return(
        
        <>
          {/* Top Navbar code start here  */}
          <header className="containers">
                <nav className="navbar  navbar-expand-lg navbar-light bg-white " id="tnavbar">
                <Link className="menuzord-brand flex items-center mx-2 my-2" to="https://www.coreip.co.in/">
                <img
                  src="https://www.coreip.co.in/wp-content/themes/twentysixteen/img/logo-gif.gif"
                  className="img-adjust mx-2"
                  alt="Core IP Logo"
                />
                <img
                  src="https://www.coreip.co.in/wp-content/themes/twentysixteen/img/matrix-logo.jpg"
                  className="logo-adjust "
                  alt="Matrix Logo"
                />
              </Link>
                  
                <div className="collapse navbar-collapse justify-content-end mx-1  mb-5 " id="navbarNav">
                <span className="navbar-text mr-3 " style={{ fontSize: '12px' }}>
                  {formattedDate}
                </span>
                   
                  <ul className="navbar-nav mr-auto small "style={{ fontSize: '12px' }}>
                    <li className="nav-item active  ">
                      <Link className="nav-link px-1" to="/">
                      <i className="fas fa-home px-1"></i>| Home |
                      </Link>
                      {/* <Link className="nav-link px-1" to="#"><i className="fas fa-home px-1"></i>| Home |</Link> */}
                    </li>
                    <li className="nav-item   ">
                    <Link className="nav-link px-1" to="/help">
                        <i className="fa-brands fa-hire-a-helper px-1"></i>Help |
                      </Link>
                          {/* <Link className="nav-link px-1" to="#"><i class="fa-brands fa-hire-a-helper px-1"></i>Help |</Link> */}
                    </li>
                    <li className="nav-item   ">
                    <Link className="nav-link px-1" to="/logout">
                      <i className="fa-solid fa-lock px-1"></i>Logout
                    </Link>
                      {/* <Link className="nav-link px-1" to="#"><i class="fa-solid fa-lock px-1"></i>Logout </Link> */}
                    </li>
                  </ul>

                  <form className="d-flex align-items-end small ml-auto">
                    <div className="input-group input-group-sm">
                      <input className="form-control form-control-sm" type="search" placeholder="Search" aria-label="Search" />
                      {/* <button className="btn btn-outline-success btn-sm mx-1" type="submit" value="search"></button> */}
                    </div>
                  </form>
                </div>

            </nav>
            {/* design list class */}
            <div className="lists">
            <ul>
             <li>
                    <div className="dropdown   mx-2">
                    <button className="btn text-white   dropdown-toggle" type="button"style={{ fontSize: '12px' ,fontWeight:'bold' }}>
                        USERS
                    </button>
                    <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/userlist">Users</Link>
                        <Link className="dropdown-item" to="/extension">Extension</Link>
                        <Link className="dropdown-item" to="/task-sheduler">TaskSheduler</Link>
                        <Link className="dropdown-item" to="/form-data">Form Data</Link>
                       
                    </div>
                </div>
            </li>
                    <li>
                    <div className="dropdown mx-2 ">
                    <button className="btn text-white  dropdown-toggle" type="button" style={{ fontSize: '12px' ,fontWeight:'bold'}} >
                        DEVICES
                    </button>
                    <div className="dropdown-menu ">
                        <Link className="dropdown-item" to="/global-config">Setting</Link>
                        <Link className="dropdown-item" to="/global-list">Config-List</Link>
                        <Link className="dropdown-item" to="/something">Something else here</Link>
                    </div>
                </div>
                </li>
                <li>
                    <div className="dropdown mx-2">
                    <button className="btn text-white  dropdown-toggle" type="button" style={{ fontSize: '12px' ,fontWeight:'bold'}}>
                        FEATURES
                    </button>
                    <div className="dropdown-menu ">
                        <Link className="dropdown-item" to="/iaction">iAction</Link>
                        <Link className="dropdown-item" to="/aaction">Another action</Link>
                        <Link className="dropdown-item" to="/saction">Something else here</Link>
                    </div>
                </div>
                </li>
                    <li>
                    <div className="dropdown mx-2">
                    <button className="btn text-white  dropdown-toggle" type="button" style={{ fontSize: '12px' ,fontWeight:'bold'}}>
                        SYSTEM
                    </button>
                    <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/p">Action</Link>
                        <Link className="dropdown-item" to="/q">Another action</Link>
                        <Link className="dropdown-item" to="r">Something else here</Link>
                    </div>
                </div>
                </li>
                <li>
                    <div className="dropdown ">
                    <button className="btn text-white  dropdown-toggle px-1" type="button" style={{ fontSize: '12px' ,fontWeight:'bold'}}>
                        DIAGNOSTICS
                    </button>
                    <div className="dropdown-menu">
                        <Link className="dropdown-item" to="x">Action</Link>
                        <Link className="dropdown-item" to="y">Another action</Link>
                        <Link className="dropdown-item" to="z">Something else here</Link>
                    </div>
                </div>
                </li>
                </ul>
           
         </div>

        
            
        </header>

        </>
    );
};
export default Header