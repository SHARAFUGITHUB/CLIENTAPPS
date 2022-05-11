
import  React, { useEffect } from 'react';
import  './roomstyle.css'
import { useState } from "react";
import  { Redirect } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

function DisplayRoomInfo()
{
    let  navigate = useNavigate();
    const [RoomObject, SetRoomsInfo] = useState([]);

    //This Is a React hook 
    useEffect(() => {
        fetch("https://sterlingsapi.azurewebsites.net/api/RoomSetUp").then(response => response.json()).then(data => SetRoomsInfo(data))},[])

        //This method is used deleting an item
        function DeleteRoomInfo(_id)
        {
            const data = { RoomType:RoomObject.RoomType, RoomBed: RoomObject.RoomBed, Price: RoomObject.Price, tv:RoomObject.tv,internet:RoomObject.internet,ironing:RoomObject.ironing,kingbed:RoomObject.kingbed,teamaker:RoomObject.teamaker,esafe:RoomObject.esafe,telephone:RoomObject.telephone,roomdining:RoomObject.roomdining };
            fetch('https://sterlingsapi.azurewebsites.net/RoomSetUpDelete', {
         
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(_id)
          }).then(r => r.json()).then(res =>
          {

           
                fetch("https://sterlingsapi.azurewebsites.net/api/RoomSetUp").then(response => response.json()).then(data => SetRoomsInfo(data))},[]);     
        }
        var stylestring1='fa fa-check-circle';
        var stylestring2='fa fa-times-circle';
     
       var stylestring3='fa fa-circle';
       var stylestring4='fa fa-circle red';


    return(
        <div className='container-fluid minh'>
        <div className='card'>
            <div className='card-title text-center pagetitle p-3'>Room Details</div>
                <div className='card-body'>
                    <table className="table">
                        <thead>
                            <tr>
                            <th className="col">Room Type</th>
                            <th className="col">RoomBed</th>
                            <th className="col">Room Price</th>
                            <th className="col">TV</th>

                            <th className="col">WI-FI</th>
                            <th className="col">Ironing</th>
                            <th className="col">COFEE</th>
                            <th className="col">ESAFE</th>
                            <th className="col">KING BED</th>
                            <th className="col">PHONE</th>
                            <th className="col">IN-DINING</th>
                            <th className="col">ACTIONS </th>
                            
                            
                            </tr>
                        </thead>
                        <tbody>
                 
                        
                        {RoomObject.map(trp=>
                            <tr key={trp._id}>
                            <td className="boldtext text-center">{trp.roomType}</td>
                            <td className="boldtext text-center">{trp.roomBed}</td>
                            <td className=" boldtext text-center"><i class="fa fa-inr" aria-hidden="true"></i>{trp.price}</td>

                            <td><i className={(trp.tv.toString()==='true')?stylestring3:stylestring4}  aria-hidden="true"></i></td>
                            <td><i  className={(trp.internet.toString()==='true')?stylestring3:stylestring4} aria-hidden="true"></i></td>
                            <td><i  className={(trp.ironing.toString()==='true')?stylestring3:stylestring4}  aria-hidden="true"></i></td> 
                            <td><i   className={(trp.teamaker.toString()==='true')?stylestring3:stylestring4} aria-hidden="true"></i></td>
                            <td><i  className={(trp.esafe.toString()==='true')?stylestring3:stylestring4} aria-hidden="true"></i></td>
                            <td><i  className={(trp.kingbed.toString()==='true')?stylestring3:stylestring4} aria-hidden="true"></i></td>
                            <td><i  className={(trp.telephone.toString()==='true')?stylestring3:stylestring4} aria-hidden="true"></i></td>
                            <td><i  className={(trp.roomdining.toString()==='true')?stylestring3:stylestring4}  aria-hidden="true"></i></td>
                            <td>
                              
                                <button type="button" onClick={()=>{navigate("/Manage/EditRoomInfo/"+trp._id)}} className="btn btn-primary">Edit</button>
                                <button type="button" onClick={()=>DeleteRoomInfo(trp._id)} className="btn btn-danger">Delete</button>
                            </td>
                            </tr>
                       
                        )}

                        </tbody>
                    </table>
                </div>
        </div>
        </div>
    )
}
export default DisplayRoomInfo