import React from 'react'

export default function DisplayStaredData({staredData,ShowStaredData}) {
    return (
    <div>
        <div className="stared-button-container">
          <button className='stared-button' onClick={()=>ShowStaredData()}>stared Data</button>
        </div>
    </div>
  )
}
