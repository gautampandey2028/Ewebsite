import React from 'react'

const ResData = ({resdata}) => {
    const {
        images,id,brand,category,price,rating,description
      }=resdata
  return (
    <>
    
      <div className='mx-5 m-8 p-4 w-52  border border-solid border-black rounded-xl bg-gray-100  hover:bg-slate-300 hover:font-bold shadow-lg' >
      <img className='rounded-e-md' src={images} alt="" />
     <h4 >{id} </h4>
     <h3 className='font-bold' >{brand} </h3>
     <h3>{category} </h3>
     <h4>{price} </h4>
     <h4>{rating}star </h4>
    {/*  <h5>{description} </h5> */}
          
        </div>  
    </>
  )
}

export default ResData