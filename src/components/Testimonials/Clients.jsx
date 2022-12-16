import React from 'react'

const Clients = ({ img, des, name, position }) => {
  return (
    <div className='text-center'>
      <img src={img} alt= "client's photos" width={80} height={80} className="rounded-full mx-auto mb-6"/>
      <p className='dark-gray-txt mb-6'>{des}</p>
      <h3 className='mb-1 text-lg font-semibold fraun'>{name}</h3>
      <p className='gray-txt '>{position}</p>
    </div>
  )
}

export default Clients;