
import  React, { useEffect } from 'react';
import { useState } from "react";
import  './jwtstyle.css'

function GetJWTInfo()
{
    const [Jwtdata, SetJWTData] = useState([]);
    
    const myHeaders = new Headers({
        'Content-Type': 'application/json',
        'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTA5NzI5OTQsImlzcyI6IlRlc3QuY29tIiwiYXVkIjoiVGVzdC5jb20ifQ.5CUbEkKiHZg7nNLzj0XHxqPBTHoiSa5qO3Rpl1pfh3o'
    });
  
    //This Is a React hook 
    useEffect(() => {
        fetch("https://localhost:44302/API/Employee", {
            method: 'GET',
            headers: myHeaders}).then(response => response.json()).then(data => SetJWTData(data))},[]);

    
               return(
                <div className='container-fluid minh'>
                <div className='card'>
                    <div className='card-title text-center pagetitle p-3'>Employee Details</div>
                        <div className='card-body'>
                            <table className="table">
                                <thead>
                                    <tr>
                                  
                                    <th className="col">Employee Name</th>
                        
                                    
                                    
                                    </tr>
                                </thead>
                                <tbody>
                         
                                
                                {Jwtdata.map(trp=>
                                    <tr>
                                    <td className="boldtext text-center">{trp}</td>
                              
                                    </tr>
                               
                                )}
        
                                </tbody>
                            </table>
                        </div>
                </div>
                </div>
            ) 
}

export default  GetJWTInfo