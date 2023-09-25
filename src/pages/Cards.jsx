import React from 'react'
import Card from '../components/Card';

function Cards({data}) {
  return (
    <div className='cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-4 gap-y-10 m-auto w-full max-w-7xl mt-8 px-5'>
        {data.map((data, index) => {
          return (
            <Card
              name={data.name}
              image={data.image_url}
              tagline={data.tagline}
              first_brewed={data.first_brewed}
              key={index}
              id={data.id}
            />
          );
        })}
    </div>
  )
}

export default Cards