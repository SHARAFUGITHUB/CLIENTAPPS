import  React, { useEffect } from 'react';
import  './roomstyle.css'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

function  EditRoomInfo(props)
{
    let  navigate = useNavigate();
    let disablecontrols=true;
    let params = useParams();
    var finalresult=false;
  const[RoomObject,SetRoomObject]=useState({roomType:'',roomBed:'',price:'',RoomTypeError:'',RoomBedError:'',PriceError:'',tv:false,internet:false,ironing:false,teamaker:false,esafe:false,kingbed:false,telephone:false,roomdining:false});
  const apiUrl = "https://localhost:44337/api/RoomSetUpUpdate";  
  const UpdateapiUrl = "https://localhost:44337/api/RoomSetUpEdit";  

//Load Data
useEffect(() => {
fetch(apiUrl, { method: 'POST',headers: { 'Content-Type': 'application/json' },body: JSON.stringify(params._id)}).then(r => r.json()).then(data =>
{
   var  roomsarray=data;
   var roominfo=roomsarray;

 SetRoomObject({roomType:roominfo[0].roomType,roomBed: roominfo[0].roomBed,price: roominfo[0].price,tv:roominfo[0].tv,internet:roominfo[0].internet,ironing:roominfo[0].ironing,teamaker:roominfo[0].teamaker,esafe:roominfo[0].esafe,kingbed:roominfo[0].kingbed,telephone:roominfo[0].telephone,roomdining:roominfo[0].roomdining});
})},[])
//end of Load Data


  const handleInputChange = event => {
    SetRoomObject((prevState) => ({ ...prevState, [event.target.name]: event.target.value }));

}

     const OnCheckBoxHandler = (event) => {
        let isChecked = event.target.checked;
        SetRoomObject({...RoomObject,[event.target.name]: isChecked });
     };
        

        const handleclear=(event)=>
        {
            SetRoomObject({RoomType:"",RoomBed:"",Price:'',RoomTypeError:'',RoomBedError:'',PriceError:'',tv:false,internet:false,ironing:false,teamaker:false,esafe:false,kingbed:false,telephone:false,roomdining:false});
 
        }

    const isValidateControls=()=>
    {
        let RoomTypeError="";
        let RoomBedError="";
        let PriceError="";
    
        if(!RoomObject.price)
        {
          PriceError="Price is required";
         SetRoomObject((prevState) => ({ ...prevState, PriceError: PriceError }));
          return false;
        
        }
        else
        {
            PriceError="";
            SetRoomObject((prevState) => ({ ...prevState, PriceError: PriceError }));
        }
      
    

      return true;
    }
    const handleSubmit=(event)=>
    {

       event.preventDefault();
       if(isValidateControls())
       {
        const data = {_id:params._id, roomType:RoomObject.roomType, roomBed: RoomObject.roomBed, price: RoomObject.price, tv:RoomObject.tv,internet:RoomObject.internet,ironing:RoomObject.ironing,kingbed:RoomObject.kingbed,teamaker:RoomObject.teamaker,esafe:RoomObject.esafe,telephone:RoomObject.telephone,roomdining:RoomObject.roomdining };
        fetch(UpdateapiUrl, {
     
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
      }).then(r => r.json()).then(res =>
      {

        navigate("/Manage/DisplayRoomsInfo");
          
      })
    
       }
    
             

    }

  return(

    <div className='container minh'>
        <div className='card'>
            <div className='card-title text-center pagetitle p-3'>Add Room Details</div>
                <div className='card-body'>
                <form  onSubmit={handleSubmit}>
            <div className='row mb-3'>
            <div className='col-4'>
                <div className='form-group'>
                <label className="form-label">Choose room Type</label>
                <select name="roomType" disabled={disablecontrols} value={RoomObject.roomType} onChange={e=>SetRoomObject({...RoomObject,RoomType:e.target.value || ''}) } className="form-select"   aria-label="Default select example">
                    <option defaultValue>Open this select menu</option>
                    <option value="EXECUTIVE ROOMS">EXECUTIVE ROOMS</option>
                    <option value="DELUXE ROOMS">DELUXE ROOMS</option>
                    <option value="DELUXE ROOM TWIN BED">DELUXE ROOM TWIN BED</option>
                    <option value="PREMIUM ROOMS">PREMIUM ROOMS</option>
                    <option value="SUITE">SUITE</option>
                    <option value="DELUXE SUITE">DELUXE SUITE</option>
                </select>
                <span style={{fontSize:20,color:"red"}} >  
                {RoomObject.RoomTypeError}
                </span>
                </div>
            </div> 
            <div className='col-4'>
            <div className='form-group'>
                <label className="form-label">Bed</label>
                <select   name="roomBed" disabled={disablecontrols} value={RoomObject.roomBed} onChange={e=>SetRoomObject({...RoomObject,RoomBed:e.target.value || ''})  }  className="form-select" aria-label="Default select example">
                    <option defaultValue>Open this select menu</option>
                    <option value="Single Room">Single Room</option>
                    <option value="Double Room">Double Room</option>
                    <option value="King Room">King Room</option>
                </select>
                <span style={{fontSize:20,color:"red"}} >  
                {RoomObject.RoomBedError}
                </span>
                </div>    
            </div>

              <div className='col-4'>
            <div className='form-group'>
                <label className="form-label">Enter Room Price</label>
                <input type='text' name="price"  value={RoomObject.price}  onChange={handleInputChange} className="form-control"></input>
                <span style={{fontSize:20,color:"red"}} >  
                {RoomObject.PriceError}
                </span>
                </div>    
            </div>


       



            </div>

            <div className='row'>
                <div className='col-12'>
                     <div className='form-group'>
                        <label className="form-label">Features</label>
                        <div className='col-12'>
                        <div className="form-check form-check-inline">
                            <input disabled={disablecontrols} className="form-check-input coustom-input-check" checked={RoomObject.tv} value={RoomObject.tv}  name='tv' onChange={OnCheckBoxHandler}  type="checkbox" id="inlineCheckbox1" ></input>
                            <label className="form-check-label " >Flat Screen Televisions</label>
                        </div>
                         <div className="form-check form-check-inline">
                            <input disabled={disablecontrols} className="form-check-input coustom-input-check" checked={RoomObject.internet} type="checkbox" id="inlineCheckbox2" value={RoomObject.internet}  name='internet' onChange={OnCheckBoxHandler}></input>
                            <label className="form-check-label" >High Speed Internet</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input disabled={disablecontrols} className="form-check-input coustom-input-check" checked={RoomObject.ironing} type="checkbox" id="inlineCheckbox2" value={RoomObject.ironing}  name="ironing" onChange={OnCheckBoxHandler} ></input>
                            <label className="form-check-label" >Iron  Ironing Board</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input disabled={disablecontrols} className="form-check-input coustom-input-check" checked={RoomObject.teamaker} type="checkbox" id="inlineCheckbox2" value={RoomObject.teamaker}  name="teamaker" onChange={OnCheckBoxHandler}></input>
                            <label className="form-check-label" >Tea / Coffee Maker</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input disabled={disablecontrols}  className="form-check-input coustom-input-check" checked={RoomObject.esafe} type="checkbox" id="inlineCheckbox2" value={RoomObject.esafe}  name="esafe" onChange={OnCheckBoxHandler}></input>
                            <label className="form-check-label" >Electronic In-room Safe</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input disabled={disablecontrols} className="form-check-input coustom-input-check" checked={RoomObject.kingbed} type="checkbox" id="inlineCheckbox2" value={RoomObject.kingbed}  name="kingbed" onChange={OnCheckBoxHandler}></input>
                            <label className="form-check-label" >King Size Bed</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input disabled={disablecontrols} className="form-check-input coustom-input-check" checked={RoomObject.telephone} type="checkbox" id="inlineCheckbox2" value={RoomObject.telephone}  name="telephone" onChange={OnCheckBoxHandler}></input>
                            <label className="form-check-label" >Telephone</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  disabled={disablecontrols} className="form-check-input coustom-input-check" checked={RoomObject.roomdining  }  type="checkbox" id="inlineCheckbox2" value={RoomObject.roomdining}  name="roomdining" onChange={OnCheckBoxHandler}></input>
                            <label className="form-check-label" >In Room Dining – 24 Hrs</label>
                        </div>
                        </div>
                        <div className="btn-group mt-5 " role="group" aria-label="Basic example">
                            <button type="submit" className="btn btn-success btn-lg">Submit</button>
                            <button type="button" disabled={disablecontrols}  onClick={handleclear} className="btn btn-secondary btn-lg">Clear</button>
                        </div>
              </div>
                </div>
            </div> 
            
           
 

        </form>

                
            </div>
        </div>
        
    </div>
  )


}

export default EditRoomInfo