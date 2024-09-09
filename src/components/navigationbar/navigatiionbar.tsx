import { SearchBar } from './searchbar/searchbar'
import './style/navigationbar.css'
export const NavigationBar = () => {

    return(
       <nav className=' container-fluid navbar border'>
        <ul className=' d-flex justify-content-between m-auto column-gap-4 justify-content-lg-center '>
            <div className=' d-flex align-items-center column-gap-4 mx-lg-5'>

            <li className=' btn navbar-brand p-0 m-0'>
                <img src="/linkedin-svgrepo-com.svg" className='logo' aria-describedby='logo' alt="" />
                <p className="logo d-none">Linkedin main logo</p>
            </li>
            <li className=' btn p-0 m-0'>
               <SearchBar />
            </li>
            </div>

            <div className=' d-flex align-items-center column-gap-4 mx-lg-5'>

            <li className=' btn p-0 m-0'>
            <i className=' bi bi-house-door-fill position-relative '>
                    <span className=' badge  position-absolute  top-0 start-100 translate-middle p-1 border border-danger border-5 rounded-circle'>
                        <span className=' visually-hidden'>Notificatino</span>
                    </span>
                   </i>
                   <p className='nav-item-name m-0 p-0 d-md-flex d-none'>Home</p>
            </li>
            <li className='btn p-0 m-0'>
                <i className=' bi bi-people-fill'></i>
                <p className='nav-item-name m-0 p-0 d-md-flex d-none'>My Network</p>
            </li>
            <li className='btn p-0 m-0'>
                <i className=' bi bi-briefcase-fill'></i>
                <p className='nav-item-name m-0 p-0 d-md-flex d-none'>Jobs</p>
            </li>
            <li className='btn p-0 m-0'>
            <i className="bi bi-chat-left-dots-fill"></i>
            <p className='nav-item-name m-0 p-0 d-md-flex d-none'>Messaging</p>
            </li>
            <li className='btn p-0 m-0'>
            <i className="bi bi-bell-fill position-relative">
            <span className=' badge  position-absolute  top-0 start-100 translate-middle bg-danger rounded-circle p-2'>
                        <span className=' visually-hidden'>4</span>
                    </span>
                    <p className=' nav-item-name m-0 p-0 d-md-flex d-none'> Notifications</p>
            </i>
            </li>
            <li className='btn p-0 m-0'>
            <i className="bi bi-person-circle"></i>
            <p className='nav-item-name m-0 p-0 d-md-flex d-none'>Me <i className=' bi bi-caret-down-fill' style={{ fontSize : "0.7rem"}}></i></p>

            </li>

            <li className=' btn d-flex flex-column d-none d-sm-flex p-0 m-0' >
            <i className="bi bi-three-dots"></i>
            <p className=' nav-item-name m-0 p-0 d-md-flex d-none'> For Business <i className=' bi bi-caret-down-fill' style={{ fontSize : "0.7rem"}}></i></p>

            </li>

            <li className=' btn d-flex flex-column d-none d-sm-flex p-0 m-0'>
            <i className="bi bi-collection-play"></i>
            <p className='nav-item-name m-0 p-0 d-md-flex d-none'>Learning</p>
            </li>
            </div>

        </ul>
       </nav>
    )
}
