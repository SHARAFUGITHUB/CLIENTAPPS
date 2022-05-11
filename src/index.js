import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import reportWebVitals from './reportWebVitals';
import AddRoomDetails from './Manage/AddRooms';
import 'bootstrap/dist/css/bootstrap.css';
import DisplayRoomInfo from './Manage/DisplayRoomsInfo'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Master/Configuration';
import EditRoomInfo from './Manage/EditRoomInfo';
import Booking from './HotelBooking/Book';
import 'bootstrap-daterangepicker/daterangepicker.css';
import BookingDisplay from './HotelBooking/BookingDisplay';
import CanceBooking from './HotelBooking/CanceBooking';
import GetJWTInfo from './JWTToken/DispplayJsonJWT';
export default function Getroutes() {
    return (
      <BrowserRouter>
  <Routes>
          <Route path="/"   element={<Layout />}>
            <Route path="/" element={<Booking />} />
          <Route path="/Manage/DisplayRoomsInfo" element={<DisplayRoomInfo />} />
          <Route path="/Manage/AddRoomDetails" element={<AddRoomDetails />} />
          <Route path="/Manage/EditRoomInfo/:_id"   element={<EditRoomInfo />} />
          <Route path="/HotelBooking/Book" element={<Booking />} />
          <Route path="/HotelBooking/BookingDisplay" element={<BookingDisplay />} />
          <Route path="/HotelBooking/CanceBooking" element={<CanceBooking />} />
          <Route path="/JWTToken/DispplayJsonJWT" element={<GetJWTInfo />} />





        </Route>
      </Routes>
      </BrowserRouter>
    );
  }

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<Getroutes></Getroutes>);
  
  
  
  reportWebVitals();
  
