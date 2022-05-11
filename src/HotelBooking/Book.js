import daterangepicker from 'bootstrap-daterangepicker';
import  React, { useEffect,Component,useRef  } from 'react';
import { useState } from "react";
import DateRangePicker from 'react-bootstrap-daterangepicker';
import { format } from 'date-fns';
import { type } from '@testing-library/user-event/dist/type';


function Booking()
{
  const[currentdate,setDates]=useState({});
  const[dobcurrent,setDob]=useState({});
  const[formatteddob,setFormatteddob]=useState({dateofbirth:'',startdate:'',enddate:''});
  const[errormessages,setErrorMessages]=useState({firstnameError:'',lastnameError:'',emailError:'',mobileError:'',noofroomsError:'',noofadultsError:'',dobError:'',bookingdateError:''});

//Defining reference objects
  const firstname=useRef('');
  const lastname=useRef('');
  const email=useRef('');
  const mobile=useRef(0);
  const roomtype=useRef('');
  const noofrooms=useRef();
   const  noofadults=useRef();
  const   noofchildren=useRef();
  //Variable declaration section
  var  customerfirstname='';
  var  customerlastname='';
  var  customerdob='';
  var customeremail='';
  var customermobile='';
  var bookingstartdate;
  var bookingenddate;
  var roomt='';


  const handleApply = (event, picker) => {
    setDates({
     startDate: picker.startDate,
      endDate: picker.endDate,
    }); 
    bookingstartdate=picker.startDate.format('MMMM D, YYYY');
    bookingenddate=picker.endDate.format('MMMM D, YYYY');  
    setFormatteddob((prevState) => ({ ...prevState, startdate:bookingstartdate,enddate:bookingenddate }));

    //setFormatteddob({startdate:bookingstartdate,enddate:bookingenddate})

  };
  const handleApplydob = (event, picker) => {
    setDob({
        startDate: picker.startDate,
       endDate: picker.endDate,
    }); 
      customerdob=picker.startDate.format('MMMM D, YYYY');
      setFormatteddob((prevState) => ({ ...prevState, dateofbirth:customerdob }));

  };
 const handleChange=()=>
 {
     customerfirstname=firstname.current.value
     customerlastname=lastname.current.value;
     customeremail=email.current.value;
     customermobile=mobile.current.value;
     roomt=roomtype.current.value;   
 }
 function  increment(type)
 {
    if(type==='rooms')
    {
        noofrooms.current.value++;
    }

    else if(type==='adults')
    {
        noofadults.current.value++;
    }
    else
    {
      noofchildren.current.value++;
    }
 }
function  decrement(type)
{
    if(type==='rooms')
    {
        noofrooms.current.value--;
    }
    else if(type=== 'adults')
    {
        noofadults.current.value--;
    }
    else
    {
      noofchildren.current.value--;
    }

}
function IsValidationOk()
{
      var firstnameError="";
      var lastnameError="";
      var emailError="";
      var mobileError="";
      var mobilelength=mobile.current.value;
      var convert=mobilelength.toString();
      var mobilenolength=convert.length;
      const  regex="@";
       var noofadultsError="";
       var noofroomsError="";
       var dobError="";
       var bookingdateError="";
    if(!firstname.current.value)
    {
        firstnameError="First Name  is required";
        setErrorMessages((prevState) => ({ ...prevState, firstnameError: firstnameError }));
        return false;
    }
    else
    {
        firstnameError="";
        setErrorMessages((prevState) => ({ ...prevState, firstnameError: firstnameError }));
    }

    if(!lastname.current.value)
    {
        lastnameError="Last Name  is required";
        setErrorMessages((prevState) => ({ ...prevState, lastnameError: lastnameError }));
        return false;
    }
    else
    {
        lastnameError="";
        setErrorMessages((prevState) => ({ ...prevState, lastnameError: lastnameError }));
    }

    if(!email.current.value)
    {
        emailError="Email  is required";
        setErrorMessages((prevState) => ({ ...prevState, emailError: emailError }));
        return false;
    }
    else
    {
        emailError="";
        setErrorMessages((prevState) => ({ ...prevState, emailError: emailError }));
    }
    if(!email.current.value.includes("@"))
    {
        emailError="Email  is Not Valid";
        setErrorMessages((prevState) => ({ ...prevState, emailError: emailError }));
        return false;
    }
    else
    {
        emailError="";
        setErrorMessages((prevState) => ({ ...prevState, emailError: emailError }));
    }
    if(!mobile.current.value)
    {
        mobileError="Mobile No  is required";
        setErrorMessages((prevState) => ({ ...prevState, mobileError: mobileError }));
        return false;
    }
    else
    {
        mobileError="";
        setErrorMessages((prevState) => ({ ...prevState, mobileError: mobileError }));
    }

    if(mobilenolength<10)
    {
        mobileError="Not a Valid a MobileNo";
        setErrorMessages((prevState) => ({ ...prevState, mobileError: mobileError }));
        return false;
    }
    else
    {
        mobileError="";
        setErrorMessages((prevState) => ({ ...prevState, mobileError: mobileError }));
    }
    if(noofrooms.current.value < 1)
    {
        noofroomsError="Choose Guest No";
        setErrorMessages((prevState) => ({ ...prevState, noofroomsError: noofroomsError }));
        return false;
    }
    else
    {
        noofroomsError="";
        setErrorMessages((prevState) => ({ ...prevState, noofroomsError: noofroomsError }));
    }
    if(noofadults.current.value < 1)
    {
        noofadultsError="Choose Adults No";;
        setErrorMessages((prevState) => ({ ...prevState, noofadultsError: noofadultsError }));
        return false;
    }
    else
    {
        noofadultsError="";
        setErrorMessages((prevState) => ({ ...prevState, noofadultsError: noofadultsError }));
    }
    if(!formatteddob.dateofbirth)
    {
        dobError="Choose DOB";;
        setErrorMessages((prevState) => ({ ...prevState, dobError: dobError }));
        return false;
    }
    else
    {
        dobError="";
        setErrorMessages((prevState) => ({ ...prevState, dobError: dobError }));
    }
    if(!formatteddob.startdate)
    {
        bookingdateError="Choose Booking Dates";
        setErrorMessages((prevState) => ({ ...prevState, bookingdateError: bookingdateError }));
        return false;
    }
    else
    {
        bookingdateError="";
        setErrorMessages((prevState) => ({ ...prevState, bookingdateError: bookingdateError }));
    }
    return true;
}


const handleSubmit=(event)=>
{ 
    event.preventDefault();

    if(IsValidationOk())
    {
    const data = { customerfirstname:firstname.current.value,customerlastname:lastname.current.value,customermobile:mobile.current.value,customeremail:email.current.value,dateofbirth:formatteddob.dateofbirth,startdate:formatteddob.startdate,enddate:formatteddob.enddate,roomt:roomtype.current.value,noofrooms:noofrooms.current.value,noofadults:noofadults.current.value,noofchildren:noofchildren.current.value}
    fetch('https://localhost:44337/api/Booking', {
     
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(r => r.json()).then(res =>
    {

        if (res)
        {
         alert(res);
        }
    
        
    });
  }

}

    return(

        <div className='container minh'>
            <div className='card col-md-6 mx-auto'>
            <div className='card-title text-center pagetitle p-3'>Booking</div>
                <div className='card-body'>
                    <form  onSubmit={handleSubmit}>
                        <div className='row mb-3'>
                            <div className='col-md-6'>
                                <div className='form-group'>
                                <label className="form-label">Frist Name</label>
                                <input  onChange={handleChange} ref={firstname} name="firstname" type="text" className="form-control"></input>
                                <span style={{fontSize:20,color:"red"}} >  
                                {errormessages.firstnameError}
                                </span>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='form-group'>
                                <label className="form-label">Last Name</label>
                                <input type="text" onChange={handleChange} ref={lastname} className="form-control"></input>
                                <span style={{fontSize:20,color:"red"}} >  
                                {errormessages.lastnameError}
                                </span>
                                </div>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className='col-md-6'>
                                <div className='form-group'>
                                <label className="form-label">Email</label>
                                <input type="email" onChange={handleChange} ref={email}  className="form-control"></input>
                                <span style={{fontSize:20,color:"red"}} >  
                                {errormessages.emailError}
                                </span>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='form-group'>
                                <label className="form-label">Mobile number</label>
                                <input type="number"  onChange={handleChange} ref={mobile}  className="form-control"></input>
                                <span style={{fontSize:20,color:"red"}} >  
                                {errormessages.mobileError}
                                </span>
                                </div>
                            </div>
                            
                        </div>
                        <div className='row mb-3'>
                        <div className='col-md-6'>
                                <div className='form-group'>
                                <label className="form-label">DOB</label>
                                <DateRangePicker 
                                initialSettings={{
                                    singleDatePicker: true,
                                    showDropdowns: true,
                                    startDate: '10/18/2022',
                                    minYear: 1901,
                                  }}
                                
                                onApply={handleApplydob}>
                                <input type="text"    className="form-control col-4" />
                                </DateRangePicker>
                            </div>
                            <span style={{fontSize:20,color:"red"}} >  
                                {errormessages.dobError}
                                </span>
                            </div>
                        </div>
                        
                        <div className='row mb-3'>
                            <div className='col-md-6'>
                                <div className='form-group'>
                                    <label className="form-label">Choose room Type</label>
                                    <select  ref={roomtype} onChange={handleChange}  name="RoomType"  className="form-select" aria-label="Default select example">
                                    <option value="EXECUTIVE ROOMS">EXECUTIVE ROOMS</option>
                                    <option value="DELUXE ROOMS">DELUXE ROOMS</option>
                                    <option value="DELUXE ROOM TWIN BED">DELUXE ROOM TWIN BED</option>
                                    <option value="PREMIUM ROOMS">PREMIUM ROOMS</option>
                                    <option value="SUITE">SUITE</option>
                                    <option value="DELUXE SUITE">DELUXE SUITE</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-md-6'>
                            <label className="form-label">Choose Booking Dates</label>
                            <DateRangePicker  onApply={handleApply} >  
                                <input type="text" className="form-control" />
                            </DateRangePicker>
                            </div>
                            <span style={{fontSize:20,color:"red"}} >  
                                {errormessages.bookingdateError}
                                </span>
                        </div>
                        <div className='row'>
                            <div className='col-md-4'>
                            <div className='form-group'>
                            <label className="form-label">Rooms</label>
                            <div className="input-group">
                                    <span className="input-group-btn">
                                        <button type="button" onClick={()=>decrement('rooms')} className="quantity-left-minus btn btn-danger btn-number"  data-type="minus" data-field="">
                                          <span className="glyphicon glyphicon-minus">-</span>
                                        </button>
                                    </span>
                                    <input type="text" id="quantity" ref={noofrooms}   onChange={handleChange}  className="form-control input-number" value="0" min="1" max="100"></input>
                                    <span className="input-group-btn">
                                        <button type="button" onClick={()=>increment("rooms")} className="quantity-right-plus btn btn-success btn-number" data-type="plus" data-field="">
                                            <span className="glyphicon glyphicon-plus">+</span>
                                        </button>
                                    </span>
                                    <span style={{fontSize:20,color:"red"}} >  
                                {errormessages.noofroomsError}
                                </span>
                                </div>
                            </div>
                            </div>

                            <div className='col-md-4'>
                            <div className='form-group'>
                            <label className="form-label">Adults</label>
                            <div className="input-group">
                                    <span className="input-group-btn">
                                        <button type="button"   onClick={()=>decrement("adults")} className="quantity-left-minus btn btn-danger btn-number"  data-type="minus" data-field="">
                                          <span className="glyphicon glyphicon-minus">-</span>
                                        </button>
                                    </span>
                                    <input type="text" id="quantity"  ref={noofadults} value="0" onChange={handleChange}  className="form-control input-number"  ></input>
                                    <span className="input-group-btn">
                                        <button type="button" onClick={()=>increment("adults")} className="quantity-right-plus btn btn-success btn-number" data-type="plus" data-field="">
                                            <span className="glyphicon glyphicon-plus">+</span>
                                        </button>
                                    </span>
                                    <span style={{fontSize:20,color:"red"}} >  
                                {errormessages.noofadultsError}
                                </span>
                                </div>
                            </div>
                            </div>

                            <div className='col-md-4'>
                            <div className='form-group'>
                            <label className="form-label">Children</label>
                            <div className="input-group">
                                    <span className="input-group-btn">
                                        <button type="button" onClick={()=>decrement("children")} className="quantity-left-minus btn btn-danger btn-number"  data-type="minus" data-field="">
                                          <span className="glyphicon glyphicon-minus">-</span>
                                        </button>
                                    </span>
                                    <input type="text" id="quantity"  ref={noofchildren} value="0" onChange={handleChange}  className="form-control input-number"  min="1" max="100"></input>
                                    <span className="input-group-btn">
                                        <button type="button" onClick={()=>increment("children")} className="quantity-right-plus btn btn-success btn-number" data-type="plus" data-field="">
                                            <span className="glyphicon glyphicon-plus">+</span>
                                        </button>
                                    </span>
                                </div>
                            </div>
                            </div>
                          
                        </div>
                        <div className="btn-group mt-5 " role="group" aria-label="Basic example">
                            <button type="submit" className="btn btn-success btn-lg">Submit</button>
                            <button type="button"   className="btn btn-secondary btn-lg">Clear</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Booking