import React from 'react'
import "../../assets/css/elements/ListItemStyle.css"

function ListItem({title1, title2, position, selected}) {
  return (
    <div className={`list-item ${selected ? "selected" : ""} row g-0`}>
        <div className="col-10">
            <div className="d-flex flex-column"></div>
            <p className='m-0'>{title1}</p>
            <p className='m-0'>{title2}</p>
        </div>
        <div className="col-2">
            <p>Place</p>
            <p className='m-0'>{position}</p>
        </div>
    </div>
  )
}

export default ListItem