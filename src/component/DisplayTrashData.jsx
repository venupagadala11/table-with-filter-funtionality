import React from 'react'
export default function DisplayTrashData({trashData,ShowTrashData}) {
  return (
    <div>
        <div className="trash-container">
          <button className='trash-button' onClick={()=>ShowTrashData()}>Trash Data</button>
        </div>
    </div>
  )
}
