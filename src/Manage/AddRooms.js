import  React, { useEffect } from 'react';
import  './roomstyle.css'
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import axios  from "axios";



function AddRoomDetails()
{
    
  var finalresult=false;
  const[RoomObject,SetRoomObject]=useState({RoomType:'',RoomBed:'',Price:'',RoomTypeError:'',RoomBedError:'',PriceError:'',tv:false,internet:false,ironing:false,teamaker:false,esafe:false,kingbed:false,telephone:false,roomdining:false});
  const apiUrl = "https://sterlingsapi.azurewebsites.net/api/RoomSetUp";  

  const handleInputChange = event => {
    let PriceError="";
    let RoomTypeError="";
    let RoomBedError="";
    SetRoomObject((prevState) => ({ ...prevState, [event.target.name]: event.target.value }));
    if(event.target.name==="RoomType" && event.target.value==="Open this select menu")
    {
     RoomTypeError="Room Type is required";
     SetRoomObject((prevState) => ({ ...prevState, RoomTypeError: RoomTypeError }));
     return false;
    }
    else
    {
        RoomTypeError="";
    SetRoomObject((prevState) => ({ ...prevState, RoomTypeError: RoomTypeError }));
    }
    if(event.target.name==="RoomBed" && event.target.value==="Open this select menu")
    {
     RoomBedError="Room Bed is required";
     SetRoomObject((prevState) => ({ ...prevState, RoomBedError: RoomBedError }));
     return false;
    }
    else
    {
        RoomBedError="";
        SetRoomObject((prevState) => ({ ...prevState, RoomBedError: RoomBedError }));
    }
    if(event.target.name==="Price" && event.target.value==="")
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
   

}

     const OnCheckBoxHandler = (event) => {
        let isChecked = event.target.checked;
        SetRoomObject({...RoomObject,[event.target.name]: isChecked });
     };
        console.log(RoomObject);

        const handleclear=(event)=>
        {
            SetRoomObject({RoomType:"",RoomBed:"",Price:'',RoomTypeError:'',RoomBedError:'',PriceError:'',tv:false,internet:false,ironing:false,teamaker:false,esafe:false,kingbed:false,telephone:false,roomdining:false});
 
        }

    const isValidateControls=()=>
    {
        let RoomTypeError="";
        let RoomBedError="";
        let PriceError="";
        if(!RoomObject.RoomType)
        {
         RoomTypeError="Room Type is required";
         SetRoomObject((prevState) => ({ ...prevState, RoomTypeError: RoomTypeError }));
         return false;

        }
        else
        {
            RoomTypeError="";
        SetRoomObject((prevState) => ({ ...prevState, RoomTypeError: RoomTypeError }));
        }
        if(!RoomObject.RoomBed)
        {
         RoomBedError="Room Bed is required";
         SetRoomObject((prevState) => ({ ...prevState, RoomBedError: RoomBedError }));
         return false;

        
        }
        else
        {
            RoomBedError="";
            SetRoomObject((prevState) => ({ ...prevState, RoomBedError: RoomBedError }));
        }

        if(!RoomObject.Price)
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
        const data = { RoomType:RoomObject.RoomType, RoomBed: RoomObject.RoomBed, Price: RoomObject.Price, tv:RoomObject.tv,internet:RoomObject.internet,ironing:RoomObject.ironing,kingbed:RoomObject.kingbed,teamaker:RoomObject.teamaker,esafe:RoomObject.esafe,telephone:RoomObject.telephone,roomdining:RoomObject.roomdining };
    //     fetch(apiUrl, {
     
    //       method: 'POST',
    //     //   headers: {
      
    //     //     'Content-Type': 'application/json'
    //     //   },
    //       body: data
    //   }).then(r => r.json()).then(res =>
    //   {

    //       if (res)
    //       {

    //         SetRoomObject({RoomType:"",RoomBed:"",Price:'',RoomTypeError:'',RoomBedError:'',PriceError:'',tv:false,internet:false,ironing:false,teamaker:false,esafe:false,kingbed:false,telephone:false,roomdining:false});
    //       }
      
          
    //   })
    let options = {
        responseType: "application/json"
    };
    
    axios.post(apiUrl,data,options).then((result) => { 
        console.log(result.statusText);
    SetRoomObject({RoomType:"",RoomBed:"",Price:'',RoomTypeError:'',RoomBedError:'',PriceError:'',tv:false,internet:false,ironing:false,teamaker:false,esafe:false,kingbed:false,telephone:false,roomdining:false});

    });  
    

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
                <select name="RoomType"  value={RoomObject.RoomType} onChange={handleInputChange ||'' } className="form-select"   aria-label="Default select example">
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
                <select   name="RoomBed" value={RoomObject.RoomBed} onChange={handleInputChange|| ''  }  className="form-select" aria-label="Default select example">
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
                <input type='text' name="Price" value={RoomObject.Price }  onChange={handleInputChange} className="form-control"></input>
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
                            <input className="form-check-input coustom-input-check" checked={RoomObject.tv} value={RoomObject.tv}  name='tv' onChange={OnCheckBoxHandler}  type="checkbox" id="inlineCheckbox1" ></input>
                            <label className="form-check-label " >Flat Screen Televisions</label>
                        </div>
                         <div className="form-check form-check-inline">
                            <input className="form-check-input coustom-input-check" checked={RoomObject.internet} type="checkbox" id="inlineCheckbox2" value={RoomObject.internet}  name='internet' onChange={OnCheckBoxHandler}></input>
                            <label className="form-check-label" >High Speed Internet</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input coustom-input-check" checked={RoomObject.ironing} type="checkbox" id="inlineCheckbox2" value={RoomObject.ironing}  name="ironing" onChange={OnCheckBoxHandler} ></input>
                            <label className="form-check-label" >Iron  Ironing Board</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input coustom-input-check" checked={RoomObject.teamaker} type="checkbox" id="inlineCheckbox2" value={RoomObject.teamaker}  name="teamaker" onChange={OnCheckBoxHandler}></input>
                            <label className="form-check-label" >Tea / Coffee Maker</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input coustom-input-check" checked={RoomObject.esafe} type="checkbox" id="inlineCheckbox2" value={RoomObject.esafe}  name="esafe" onChange={OnCheckBoxHandler}></input>
                            <label className="form-check-label" >Electronic In-room Safe</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input coustom-input-check" checked={RoomObject.kingbed} type="checkbox" id="inlineCheckbox2" value={RoomObject.kingbed}  name="kingbed" onChange={OnCheckBoxHandler}></input>
                            <label className="form-check-label" >King Size Bed</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input coustom-input-check" checked={RoomObject.telephone} type="checkbox" id="inlineCheckbox2" value={RoomObject.telephone}  name="telephone" onChange={OnCheckBoxHandler}></input>
                            <label className="form-check-label" >Telephone</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input coustom-input-check" checked={RoomObject.roomdining  }  type="checkbox" id="inlineCheckbox2" value={RoomObject.roomdining}  name="roomdining" onChange={OnCheckBoxHandler}></input>
                            <label className="form-check-label" >In Room Dining – 24 Hrs</label>
                        </div>
                        </div>
                        <div className="btn-group mt-5 " role="group" aria-label="Basic example">
                            <button type="submit" className="btn btn-success btn-lg">Submit</button>
                            <button type="button"  onClick={handleclear} className="btn btn-secondary btn-lg">Clear</button>
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








export default AddRoomDetails