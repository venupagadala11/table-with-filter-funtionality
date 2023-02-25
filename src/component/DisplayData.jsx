import React from 'react';
import { useState } from 'react';
// import star from "./images/star.svg";
import star from '../images/delete.png';
import img from '../images/star-img.png';

export default function DisplayUserData({data, isUserDataActive, handleDeleteUserDetails,handleStaredData,trashData, isTrashDataActive, staredData, isStaredDataActive, starFlag}) {

  return (
    <div>

<div>
     { isUserDataActive ? 
     <div>
        <h3 className='users-info'>USERS-INFO</h3>
        <table>
            <tr>
            <th>ID</th>
            <th>First_name</th>
            <th>Last_name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>IP_Address</th>
            <th>remove</th>
            </tr>

            {data.map((item,index) => (
            <tr key={index}>
            <td>{item.id}</td>
            <td><img className='star-img' onClick={()=>handleStaredData(index)} style={{ background: starFlag==index ? "gold" : "white" }} src={img} alt="star"/> {item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
            <td>{item.gender}</td>
            <td>{item.ip_address}</td>
            <td><img src={star} className='deleteUser-button' onClick={()=>handleDeleteUserDetails(index)}></img></td>
            </tr>
         ))}
      </table>
            </div> : <span></span>
            }
        </div>

      <div>
            {
                isTrashDataActive ? <div>
                     <h3 className='trashData-title'>Trash Data</h3>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>First_name</th>
                        <th>Last_name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>IP_Address</th>
                    </tr>
            
                    {trashData.map((item,index) => (
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.email}</td>
                        <td>{item.gender}</td>
                        <td>{item.ip_address}</td>
                    </tr>
                    ))}
                </table>
            </div> : <span></span>
            }
        </div>
        <div>
            {
                isStaredDataActive ? <div>
                    <h3 className='starData-title'>Stared Data</h3>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>First_name</th>
                        <th>Last_name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>IP_Address</th>
                    </tr>
            
                    {staredData.map((item,index) => (
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td><img className='starImg' src={img} alt="star"/>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.email}</td>
                        <td>{item.gender}</td>
                        <td>{item.ip_address}</td>
                    </tr>
                    ))}
                </table>
            </div> : <span></span>
            }
        </div>
    </div>
  )
}
