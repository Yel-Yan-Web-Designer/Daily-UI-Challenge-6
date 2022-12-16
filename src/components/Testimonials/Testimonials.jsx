import React from 'react';
import data from './testimonialData.js';
import Clients from './Clients.jsx';

const Testimonials = () => {
  const [clients, setClients] = React.useState(data);

  let client = clients.map(x => {
    let {id, img, des, position, name} = x;
    return (
      <Clients
        key = {id}
        img = {img}
        des = {des}
        position = {position}
        name = {name}
      />
    )
  })

  return (
    <div className='bg-white py-32 md:px-20' >
      <h1 className='text-center font-semibold gray-txt fraun mb-10 text-2xl tracking-widest'>CLIENTS TESTIMONIALS</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-y-20 px-10 md:gap-x-10">
          {client}  
        </div>
    </div>
  )
}

export default Testimonials
