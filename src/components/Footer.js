import React from 'react'

const Footer = ({length}) => {
   
  return (
    <div className='footer'>
        <h2>{length} List {length === 1? "item" : "items"}</h2>
    </div>
  )
}

export default Footer;