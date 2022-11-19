import React from 'react'
import moment from 'moment'

export default function NameListItem(props) {
  return (
    <div>
        <li className='list-group-item shadow'>
            <div className='row align-items -center'>
                <div className='col-3'>
                    <img src={props.avatar} alt="user profile pic" className='border border-dark rounded-circle shadow-sm'/>    
                </div>
                <div className='col-9'>
                    <h5>{props.name}</h5>
                    <p>{props.city} | {props.email}</p>
                    <small>{moment(props.birthday).format('DD-MM-YYYY')}</small>
                </div>
            </div>
        </li>
    </div>
  )
}
