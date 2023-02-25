import React, {useState} from 'react';

export default function SearchComponent({handleInputChange,handleSelectedOption}) {
 
  return (
    <div className="container-search">
      <div className='search-container'>
        <div className="search-bar"><label id='search-label' htmlFor="search">Search </label><input placeholder="Type a value" id="search" onChange={handleInputChange } /></div>
        <div className="dropDown-box">Select Gender
          <select id="gender" defaultValue="all" onChange={(e)=>handleSelectedOption(e)} >
            <option value="all">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>
    </div>
  )
}


