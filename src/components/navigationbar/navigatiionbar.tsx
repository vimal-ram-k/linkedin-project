import { Link } from 'react-router-dom'
import { SearchBar } from './searchbar/searchbar'
import './style/navigationbar.css'
export const NavigationBar = () => {

    return(
       <nav className=' navbar border-bottom p-0' id='navbarDropdown'>
        <ul className=' container-fluid d-flex justify-content-around align-content-center justify-content-md-center'>
            <li className=' btn navbar-brand m-0 nav-item '>
                <Link to="/feed" className=' nav-link active '>
                <img src="/linkedin-svgrepo-com.svg" className='logo' aria-describedby='logo' alt="" />
                <p className="logo d-none">Linkedin main logo</p>
                </Link>
            </li>
            <li className=' btn nav-item '>
               <SearchBar />
            </li>

            <li className=' btn nav-item '>
                <Link to="/feed" className='' >
            <i className=' bi bi-house-door-fill position-relative '>
                    <span className=' badge  position-absolute  top-0 start-100 translate-middle p-1 border border-danger border-5 rounded-circle'>
                        <span className=' visually-hidden'>Notificatino</span>
                    </span>
                   </i>
                   <p className='nav-item-name m-0 p-0 d-md-flex d-none'>Home</p>
                </Link>
            </li>
            <li className=' btn nav-item '>
                <Link to="/myconnect">
                <i className=' bi bi-people-fill'></i>
                <p className='nav-item-name m-0 p-0 d-md-flex d-none'>My Network</p>
                </Link>
            </li>
            <li className=' btn nav-item '>
                <Link to="/jobs">
                <i className=' bi bi-briefcase-fill'></i>
                <p className='nav-item-name m-0 p-0 d-md-flex d-none'>Jobs</p>
                </Link>
            </li>
            <li className=' btn nav-item '>
                <Link to="/messaging">
            <i className="bi bi-chat-left-dots-fill"></i>
            <p className='nav-item-name m-0 p-0 d-md-flex d-none'>Messaging</p>
                </Link>
            </li>
            <li className='btn nav-item'>
                <Link to="/notifications">
            <i className="bi bi-bell-fill position-relative">
            <span className=' badge  position-absolute  top-0 start-100 translate-middle bg-danger rounded-circle p-2'>
                        <span className=' visually-hidden'>4</span>
                    </span>
                    <p className=' nav-item-name m-0 p-0 d-md-flex d-none'> Notifications</p>
            </i>
                </Link>
            </li>
            <li className='btn nav-item '>
            <i className="bi bi-person-circle"></i>
            <p className='nav-item-name m-0 p-0 d-md-flex d-none'>Me <i className=' bi bi-caret-down-fill' style={{ fontSize : "0.7rem"}}></i></p>

            </li>

            <li className='btn nav-item  d-flex flex-column d-none d-sm-flex ' >
            <i className="bi bi-three-dots"></i>
            <p className=' position-relative nav-item-name m-0 p-0 d-md-flex d-none'> For Business <i className=' bi bi-caret-down-fill position-absolute top-0 start-100' style={{ fontSize : "0.7rem"}}></i></p>

            </li>

            <li className='btn nav-item  d-flex flex-column d-none d-sm-flex '>
            <i className="bi bi-collection-play"></i>
            <p className='nav-item-name m-0 p-0 d-md-flex d-none'>Learning</p>
            </li>

        </ul>
       </nav>
    )
}
