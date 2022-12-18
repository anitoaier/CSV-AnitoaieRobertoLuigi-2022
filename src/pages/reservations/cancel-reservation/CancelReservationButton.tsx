import React from 'react'

const CancelReservationButton=(props:{
    onClick: ()=> void
})=> {
  return (
    <button className="CancelButton" onClick={props.onClick}><i className="fa fa-times-circle" aria-hidden="true"></i> Cancel Reservation</button>
  )
}

export default CancelReservationButton;