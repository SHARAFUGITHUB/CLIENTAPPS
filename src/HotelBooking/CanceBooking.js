import { useReducer,useState } from "react";
import ReactDOM from "react-dom";
import axios  from "axios";
import { useEffect } from "react";
import { Button } from "bootstrap";
import { red } from "@mui/material/colors";
import { color } from "@mui/system";


const initialState={
    laoding:true,
    error:'',
    post:{}
}
const reduce=(state,action)=>
{
    switch(action.type)
    {

        case "FETCHSUCCESS":
            return {laoding:false,post:action.payload,error:''}

            case "FETCHERROR":
            return {laoding:false,post:{},error:'sOMETHING WENT WRONG'}

        default:
                return state;

    }
}
function CanceBooking()
{


    const[state,dispatch]=useReducer(reduce,initialState);
    const[mobileno,setMobileNo]=useState();
    const[data,setData]=useState({});


    function LoadCurrentBookingInfo(mobileno)
    {
        fetch('https://localhost:44337/api/CancelBooking', {
         
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(mobileno)
        }).then(r => r.json()).then(res =>
        {
             //setData(res);
            dispatch({type:'FETCHSUCCESS',payload:res})


        })  
    }
    function GetBookedInfo()
    {
     fetch('https://localhost:44337/api/CancelBooking', {
         
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(mobileno)
        }).then(r => r.json()).then(res =>
        {
             //setData(res);
            dispatch({type:'FETCHSUCCESS',payload:res})


        })  
       
    }
     
    function CancelMyBooking(mobileno)
    {
        const customermobile = { customermobile: mobileno };
        axios.post('https://localhost:44337/api/CancelMyBooking',customermobile).then((result) => { 

            LoadCurrentBookingInfo(customermobile);
        });  
    }
    return(
        <div>
        <h1>Cancel Booking</h1>

        <div className='col-4'>
        <div className='form-group'>
            <label className="form-label">Enter Booked Mobile Number</label>
            <input type='number' name="mobileno" value={mobileno } onChange={e=>setMobileNo(e.target.value)} className="form-control"></input>
            <span style={{fontSize:20,color:"red"}} >  
          
            </span>
            </div>    
        </div>

        <div className="btn-group mt-5 " role="group" aria-label="Basic example">
        <button type="button" onClick={()=>GetBookedInfo()} className="btn btn-success btn-lg">Show My Booking</button>
        </div>

        {state.post.length > 0 &&
        <table className="table">
                            <thead>
                                <tr>
                                <th className="col">FIRST NAME</th>
                                <th className="col">LAST NAME</th>
                                <th className="col">MOBILE</th>
                                <th className="col">EMAIL</th>
                                <th className="col">ROOM TYPE</th>
                                <th className="col">DOB</th>
                                <th className="col">BOOKING START DATE</th>
                                <th className="col">BOOKING END DATE</th>
                                <th className="col">NO OF ROOMS</th>
                                <th className="col">NO OF ADULTS</th>
                                <th className="col">NO OF CHILDREN</th>
                                <th className="col">ACTIONS</th>

                             

                                
                                </tr>
                            </thead>
                            <tbody>
                            {state.post.map(trp=>
                                <tr key={trp._id}>
                                <td className="boldtext text-center">{trp.customerfirstname}</td>
                                <td className="boldtext text-center">{trp.customerlastname}</td>
                                <td>{trp.customermobile}</td>
                                <td>{trp.customeremail}</td>
                                <td>{trp.roomt}</td>
                                <td>{trp.dateofbirth}</td>
                                <td className="boldtext text-center">{trp.startdate}</td>
                                <td className="boldtext text-center">{trp.enddate}</td>
                                <td>{trp.noofrooms}</td>
                                <td>{trp.noofadults}</td>
                                <td>{trp.noofchildren}</td>
                                <td><button onClick={()=>CancelMyBooking(trp.customermobile)} style={{ background:'white',color:'red',font: 'bold'}}>CANCEL BOOKING</button></td>

                                </tr>
                           
                            )}
                            </tbody>
                        </table>
}
                </div>

    )
}
export default CanceBooking