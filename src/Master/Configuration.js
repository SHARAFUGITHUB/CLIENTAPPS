import { Outlet, Link } from "react-router-dom";
import './masterstyle.css'

function  Layout ()
{
    return (
     
      <div>
         <div className="header mb-5">
        {/* <nav>
          <ul>
            <li>
              <Link to="/Manage/AddRoomDetails">AddRoomDetails</Link>
            </li>
            <li>
              <Link to="/Manage/DisplayRoomsInfo">DisplayRoomsInfo</Link>
            </li>
          </ul>
        </nav> */}
<div className="container pt-3">
<nav className="navbar navbar-expand-lg navbar-transperant ">
  <a className="navbar-brand" href="#"><img src="../images/logo.png" className="img-fluid" alt=" logo"/></a>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav ms-auto headernav">
      <li className="nav-item active">
      <Link  className="nav-link" to="/Manage/AddRoomDetails">AddRoomDetails</Link>
      </li>

      <li className="nav-item">
      <Link className="nav-link" to="/Manage/DisplayRoomsInfo">DisplayRoomsInfo</Link>
      </li>

      <li className="nav-item">
      <Link className="nav-link" to="/HotelBooking/Book">Book My Room</Link>
      </li>
      
      <li className="nav-item">
      <Link className="nav-link" to="/HotelBooking/BookingDisplay">Show Bookings</Link>
      </li>

      <li className="nav-item">
      <Link className="nav-link" to="/HotelBooking/CanceBooking">Cancel Booking</Link>
      </li>
 
      <li className="nav-item">
      <Link className="nav-link" to="/JWTToken/DispplayJsonJWT">JWT INFO</Link>
      </li>
    

    </ul>

  </div>
</nav>
</div>


        </div>
        <Outlet />
        </div>
        
    )
}
    

  export default Layout