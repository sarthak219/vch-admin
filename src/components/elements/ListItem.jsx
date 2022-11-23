import React from 'react'
import "../../assets/css/elements/ListItemStyle.css"

function ListItem({title, position, selected}) {
  return (
    <div className={`list-item ${selected ? "selected" : ""} row g-0`}>
        <div className="col-10">
            <p className='m-0'>{title}</p>
        </div>
        <div className="col-2">
            <p>Place</p>
            <p className='m-0'>{position}</p>
        </div>
    </div>
  )
}

export default ListItem