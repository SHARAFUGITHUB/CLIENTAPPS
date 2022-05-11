import  React, { useEffect,Component,useRef  } from 'react';
import { useState ,useContext,createContext} from "react";
const UserContext =createContext();
function BookingDisplay()
{
    const[currentbookinginfo,setBookingInfo]=useState([]);
    useEffect(() => {
       fetch("https://localhost:44337/api/Booking").then(response => response.json()).then(data => setBookingInfo(data))},[])
    return(
        <div>
   <UserContext.Provider value={currentbookinginfo}>
       <BookingController currentbookinginfo={currentbookinginfo} ></BookingController>
   </UserContext.Provider>
   </div>
    )

}

function BookingController()
{
    return(
   <BookingUI></BookingUI>
    )

}
function BookingUI()
{
    const currentbookinginfo=useContext(UserContext);

    console.log(currentbookinginfo);
    
        return(
            <div className='container-fluid minh'>
            <div className='card'>
                <div className='card-title text-center pagetitle p-3'>BOOKING DETAILS</div>
                    <div className='card-body'>
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
                             

                                
                                </tr>
                            </thead>
                            <tbody>
                            {currentbookinginfo.map(trp=>
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

                                

                        
                         
                                </tr>
                           
                            )}
                            </tbody>
                        </table>
                    </div>
            </div>
            </div>


        )

        
}



export default BookingDisplay



